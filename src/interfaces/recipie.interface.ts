import { RecipeIngredient } from "../db/models/recipie.ingredients.entity";
import { IngredientInterface } from "./ingredient.interface";

export interface RecipeInterface{
    id: number;
    title: string;
    iconUrl: string;
    created: Date;
    instructions: string;
    cooktime: number;
    ingredients: RecipeIngredient[];
}