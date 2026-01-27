import { RecipeIngredient } from "../db/models/recipie.ingredients.entity";

export interface IngredientInterface {
  id: number;
  name: string;
  usages: RecipeIngredient[]
}
