import { AppDataSource } from "../db/datasource";
import { RecipeService } from "../db/services/recipe.service";
import { logger } from "../utils/logger";
import {SAMPLE_RECIPES} from "./data"

async function populate() {
  await AppDataSource.initialize();
  logger.debug("DB connected")
  

  for (const r of SAMPLE_RECIPES) {
    await RecipeService.createRecipie(r);
  }

  logger.debug("Sample recepies created")
  await AppDataSource.destroy();
}

populate().catch(console.error);