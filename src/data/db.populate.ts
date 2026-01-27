import { AppDataSource } from "../db/datasource";
import { User } from "../db/models/users.entity";
import { RecipeService } from "../db/services/recipe.service";
import { logger } from "../utils/logger";
import { calculatePasswordHash } from "../utils/utils";
import {SAMPLE_RECIPES, USERS} from "./data"

async function populate() {
  await AppDataSource.initialize();
  logger.debug("DB connected")
  

  for (const r of SAMPLE_RECIPES) {
    await RecipeService.createRecipie(r);
  }

  const users = Object.values(USERS);
  for (let userData of users){
    logger.debug(`Inserting user: ${userData}`)
    const {email,pictureUrl,isAdmin,passwordSalt,plainTextPassword} = userData
    const user = AppDataSource
        .getRepository(User)
        .create({
          email,
          pictureUrl,
          isAdmin,
          passwordSalt, 
          passwordHash: await calculatePasswordHash(plainTextPassword,passwordSalt)
        }) 
      await AppDataSource.manager.save(user);
  }

  logger.debug("Sample recepies created")
  await AppDataSource.destroy();
}

populate().catch(console.error);