import "dotenv/config"
import { AppDataSource } from "../db/datasource";
import { logger } from "../utils/logger";

async function wipe() {
  await AppDataSource.initialize();
  logger.debug("Connected to DB");

  await AppDataSource.dropDatabase();
  logger.debug("Database dropped");

  await AppDataSource.synchronize();
  logger.debug("Database recreated");

  await AppDataSource.destroy();
  logger.debug("Done");
}

wipe().catch(err => logger.error(err));    