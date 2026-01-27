import { Router } from "express";
import { RecipeService } from "../db/services/recipe.service";
import { asyncHandler } from "../utils/utils";
import createHttpError from "http-errors";
import { logger } from "../utils/logger";

export const recipeRouter = Router();

recipeRouter.get(
  "/recipes",
 asyncHandler(async (req, res) => {
    const filters = req.query;
    const recipes = await RecipeService.getAllRecipes(filters);
    res.status(200).json({ recipes });
  })
);


recipeRouter.get<{id:string}>(
  "/recipes/:id",
 asyncHandler(async (req, res) => {
    const id = req.params.id;
    const recipe = await RecipeService.getrecipeById(id);
    if (!recipe) {
      logger.error(`Could not find recpie with id: ${id}`)
      throw createHttpError(404, "Recipe not found");
    }

    res.status(200).json({ recipe });

  })
);

recipeRouter.post("/recipes",
  asyncHandler(async (req,res)=> {
    const body = req.body;
    const recipe = await RecipeService.createRecipie(body);
    res.status(201).json(recipe);
  })
);