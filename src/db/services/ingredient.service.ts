import { Perf, SealClass } from "../../utils/decorators";
import { AppDataSource } from "../datasource";
import { Ingredient } from "../models/ingredient.entity";
import { Recipe } from "../models/recipe.entity";

@SealClass()
export class IngredientService {

    @Perf()
    static async getRecipieFromIngredient(ingredientId:string){
        return AppDataSource.getRepository(Recipe)
                .createQueryBuilder("recipe")
                .innerJoin("recipe.ingredients", "ri")
                .innerJoin("ri.ingredient", "ingredient")
                .where("ingredient.id = :id", { id: ingredientId })
                .getMany();

    }    
}
