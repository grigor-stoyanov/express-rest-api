import { Ingredient } from "../db/models/ingredient.entity";
import { Recipe } from "../db/models/recipe.entity";

export interface RecipeIngredientInterface {
    id:string;
    amount:number;
    unit:string;
    recipe:Recipe;
    ingredient:Ingredient;
}