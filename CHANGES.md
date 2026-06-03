# Changes — podman-compose Windows Fix & Project Setup

## Context

`podman-compose build` was failing with:

```
Error: no Containerfile or Dockerfile specified or found in context directory,
C:\Users\gstoyanov6\express-rest-api: The system cannot find the file specified.
```

Three issues were identified and resolved.

---

## 1. `podman_compose.py` — Bug: Windows drive letters misidentified as git URLs

**File:** `podman_compose.py` (Python site-package)  
**Function:** `is_context_git_url()`  
**Line:** ~2825

### Root cause

`urllib.parse.urlparse("C:\\Users\\...")` parses the Windows drive letter `C` as a URL
scheme. The existing heuristic `r.scheme != "" and r.netloc == "" and r.path != ""` then
incorrectly returns `True`, treating any Windows absolute path as a remote git context.
This caused the entire dockerfile-detection block inside `container_to_build_args()` to be
skipped, so `-f <dockerfile>` was **never** passed to `podman build`.

### Diff

```diff
 def is_context_git_url(path: str) -> bool:
     r = urllib.parse.urlparse(path)
     if r.scheme in ('git', 'http', 'https', 'ssh', 'file', 'rsync'):
         return True
-    # URL contains a ":" character, a hint of a valid URL
-    if r.scheme != "" and r.netloc == "" and r.path != "":
+    # URL contains a ":" character, a hint of a valid URL.
+    # Exclude single-character schemes (Windows drive letters like "C:") to avoid
+    # misidentifying absolute Windows paths (e.g. C:\Users\...) as git URLs.
+    if r.scheme != "" and len(r.scheme) > 1 and r.netloc == "" and r.path != "":
         return True
     if r.scheme == "":  # tweak path URL to get username from url parser
         r = urllib.parse.urlparse("ssh://" + path)
         if r.username is not None and r.username != "":
             return True
     return False
```

---

## 2. `podman_compose.py` — Improvement: Pass dockerfile as a relative path

**File:** `podman_compose.py` (Python site-package)  
**Function:** `container_to_build_args()`  
**Line:** ~2897

### Rationale

Even after fix #1 restores the `-f` flag, the path passed was an absolute Windows path
(e.g. `C:\Users\...\Dockerfile-app`). Podman, which runs inside a WSL VM, may not resolve
Windows-style backslash paths passed via `-f`. Passing a relative path (e.g. `Dockerfile-app`)
is what podman receives when invoked directly from the shell, and it works correctly.

### Diff

```diff
         if path_exists(dockerfile):
             # normalize dockerfile path, as the user could have provided unpredictable file formats
             dockerfile = os.path.normpath(os.path.join(ctx, dockerfile))
-            build_args.extend(["-f", dockerfile])
+            # Use a relative path so podman (which may run in WSL) can resolve it correctly.
+            # Absolute Windows paths with backslashes are not resolvable inside the WSL VM.
+            try:
+                dockerfile = os.path.relpath(dockerfile)
+            except ValueError:
+                pass  # relpath fails on Windows when paths are on different drives; fall back to absolute
+            build_args.extend(["-f", dockerfile])
```

