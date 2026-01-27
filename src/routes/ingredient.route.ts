import { Router } from "express";
import { asyncHandler } from "../utils/utils";
import createHttpError from "http-errors";
import { logger } from "../utils/logger";
import { IngredientService } from "../db/services/ingredient.service";
import { RecipeService } from "../db/services/recipe.service";

export const ingredientRouter = Router();


ingredientRouter.get<{id:string}>(
  "/ingredients/:id/recipes",
 asyncHandler(async (req, res) => {
    const id = req.params.id;
    const recipes = await IngredientService.getRecipieFromIngredient(id);
    if (!recipes && ! RecipeService.length) {
      logger.error(`Could not find recpie for id: ${id}`)
      throw createHttpError(404, "Recipe not found");
    }

    res.status(200).json({ recipes });
  })
);