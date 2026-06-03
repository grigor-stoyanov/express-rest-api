# Recipe REST API

A REST API built with **Node.js**, **Express**, and **TypeScript** for managing recipes and ingredients. Uses **TypeORM** with PostgreSQL and includes JWT-based authentication. Containerised with Docker / Podman Compose.

---

## What it does

- Browse and search recipes with filters (keyword, cook time, ingredients, date)
- Paginated results out of the box
- Create, update and delete recipes (admin only)
- User registration and login with JWT tokens
- Passwords hashed with PBKDF2-SHA512

---

## Stack

- **Runtime** — Node.js 20 + TypeScript (strict)
- **Framework** — Express 5
- **ORM** — TypeORM 0.3
- **Database** — PostgreSQL (SSL)
- **Auth** — JWT
- **Logging** — Winston
- **Containers** — Docker / Podman Compose

---

## Endpoints

### Recipes
```
GET    /api/recipes            - list all recipes (paginated + filterable)
GET    /api/recipes/:id        - get one recipe
POST   /api/recipes            - create recipe  [JWT + Admin]
PATCH  /api/recipes/:id        - update recipe  [JWT + Admin]
DELETE /api/recipes/:id        - delete recipe  [JWT + Admin]
```

**Filters for GET /api/recipes:**
```
?keyword=pasta         search title and instructions
?ingredients=egg,milk  filter by ingredient names
?duration=30           max cook time in minutes
?created=2024-01-01    created on or before date
?pageNo=1&limit=5      pagination
```

### Users
```
POST /api/users          - register
POST /api/users/login    - login, returns JWT token
```

### Other
```
GET /api/ingredients/:id/recipes  - get all recipes that use an ingredient
GET /ping                         - health check
```

---

## Data model

Recipes and ingredients have a many-to-many relationship through a join table (`RECIPE_INGREDIENTS`) that also stores `amount` and `unit` per recipe-ingredient pair.

```
Recipe ──< RecipeIngredient >── Ingredient
```

---

## Some things I'm happy with

**Custom decorators** — built a few TypeScript method/class decorators:
- `@Perf()` — logs execution time of any method
- `@Paginate()` — wraps a TypeORM QueryBuilder method and handles pagination automatically
- `@SealClass()` — seals the class constructor and prototype

**`asyncHandler` wrapper** — avoids try/catch in every route handler by forwarding async errors to Express's error middleware.

**`mapToEntity` utility** — maps a plain DTO object onto a TypeORM entity using reflection, only touching columns that actually exist on the entity.

---

## Getting started

### 1. Clone and install
```bash
git clone https://github.com/grigor-stoyanov/express-rest-api
cd express-rest-api
npm install
```

### 2. Set up environment
```bash
cp .env.example .env
```

Fill in `.env`:
```env
ENVIRONMENT=DEVELOPMENT
NODE_ENV=development
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=your_db_name
JWT_SECRET=your_secret
LOGGER_LEVEL=debug
```

> `ENVIRONMENT` must be uppercase `DEVELOPMENT` — TypeORM's `synchronize` checks for an exact match.

### 3. Run with Docker / Podman Compose
```bash
podman-compose up --build
```

Or run locally (requires a running Postgres instance):
```bash
npm run dev
```

### 4. Seed the database
```bash
npm run build  # or have tsc --watch running
npm run populate-database
```

This drops the database, recreates the schema, and inserts 14 sample recipes and 2 users.

---

## Project structure

```
src/
├── server.ts
├── routes/          # Express routers
├── db/
│   ├── models/      # TypeORM entities
│   └── services/    # DB logic
├── middlewares/     # Auth, admin guard, error handler
├── utils/           # Decorators, logger, helpers
└── data/            # Seed data and scripts
```

---

## Notes

- Runs in Docker / Podman Compose — see `docker-compose.yml` and `Dockerfile-app`
- On **Windows with Podman**, hot-reload works best when the project lives on the WSL2 filesystem. The tsconfig uses `fixedPollingInterval` watch mode to work around inotify limitations
- Debug port `9229` is exposed when running `npm run dev`
