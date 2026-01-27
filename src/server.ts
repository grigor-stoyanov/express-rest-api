import * as dotenv from "dotenv";

const envs = dotenv.config();

if (envs.error) {
  console.error("Error loading environment variables, aborting...");
  process.exit(0);
}
import express from "express";
const cors = require('cors');
import { ping } from "./routes/health";
import { isInteger } from "./utils/utils";
import { logger } from "./utils/logger";
import { AppDataSource } from "./db/datasource";
import { recipeRouter } from "./routes/recipe.route";
import defaultErrorFunction from "./middlewares/default.error.handler";
import { ingredientRouter } from "./routes/ingredient.route";
import { userRouter } from "./routes/user.route";

const app = express();

function setupExpress() {
  app.use(cors({origin:true}));
  app.use(express.json());
  app.route("/ping").get(ping);
  app.use("/api", recipeRouter);
  app.use("/api", ingredientRouter);
  app.use("/api",userRouter);
  app.use(defaultErrorFunction);
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
    port = 9000;
  }
  app.listen(port, () =>
    logger.info(`HTTP REST API server running at http://localhost:${port}`),
  );
}

AppDataSource.initialize()
  .then(() => {
    setupExpress();
    startServer();
  })
  .catch((err) => logger.info(`Error initializing data source`, err));
