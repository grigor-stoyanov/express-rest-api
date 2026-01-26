import { Router } from "express";
import { RecipeService } from "../db/services/recipe.service";
import { asyncHandler } from "../utils/utils";

export const recipeRouter = Router();

// GET /api/recipes
recipeRouter.get(
  "/recipes",
 asyncHandler(async (req, res) => {
    const recipes = await RecipeService.getAllRecipes();
    res.status(200).json({ recipes });
  })

);

// You can add more later:
// recipeRouter.post("/recipes", RecipeService.createRecipe);
// recipeRouter.get("/recipes/:id", RecipeService.getRecipeById);
