import { logger } from "../../utils/logger";
import { AppDataSource } from "../datasource";
import { Recipe } from "../models/recipe.entity";
import { Perf,SealClass } from "../../utils/decorators";

@SealClass()
export class RecipeService {

    @Perf()
    static async getAllRecipes(){
        logger.debug(`Called getAllRecipes`);
        return await AppDataSource.getRepository(Recipe).find({
        relations:["ingredients"],
        order: { created: "ASC" }
        });

    }
}