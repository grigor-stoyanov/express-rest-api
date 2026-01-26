import * as dotenv from "dotenv";

const envs = dotenv.config();

if (envs.error) {
  console.error("Error loading environment variables, aborting...");
  process.exit(0);
}

import express from "express";
import { ping } from "./routes/health";
import { isInteger } from "./utils/utils";
import { logger } from "./logger";

const app = express();

function setupExpress() {
  app.route("/ping").get(ping);
}

function startServer() {
  const portEnv = process.env.PORT,
    [portArg] = process.argv.slice(2);
  let port: number;
  if (isInteger(portEnv)) {
    port = Number.parseInt(portEnv);
  } else if (isInteger(portArg)) {
    port = Number.parseInt(portArg);
  } else {
    port=9000
  }
  app.listen(port ,() =>
      logger.info(`HTTP REST API server running at http://localhost:${port}`)
  );
}

setupExpress();
startServer();
