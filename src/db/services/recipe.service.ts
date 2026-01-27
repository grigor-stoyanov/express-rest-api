import { logger } from "../../utils/logger";
import { AppDataSource } from "../datasource";
import { Recipe } from "../models/recipe.entity";
import { Perf, SealClass, Paginate } from "../../utils/decorators";
import { RecipeDTO, FiltersInterface } from "../../interfaces";
import { Brackets,SelectQueryBuilder } from "typeorm";
import { Ingredient } from "../models/ingredient.entity";
import { RecipeIngredient } from "../models/recipie.ingredients.entity";
import { mapToEntity } from "../../utils/utils";
@SealClass()
export class RecipeService {
  @Perf()
  @Paginate(5)
  static async getAllRecipes(filters?: Partial<FiltersInterface>):Promise<SelectQueryBuilder<Recipe>> {
    logger.debug(`Called getAllRecipes`);
    const query = AppDataSource.getRepository(Recipe)
      .createQueryBuilder("recipe")
      .leftJoinAndSelect("recipe.ingredients", "ri")
      .leftJoinAndSelect("ri.ingredient", "ingredient");

    if (filters?.keyword) {
      query.andWhere(
        new Brackets((query) => {
          query
            .where("recipe.title ILIKE :kw")
            .orWhere("recipe.instructions ILIKE :kw");
        }),
        { kw: `%${filters.keyword}%` },
      );
    }

    if (filters?.created) {
      const date = new Date(filters.created);
      if (Number.isNaN(date.getTime())) {
        logger.error("date string doesn't match format");
        throw new Error("Invalid date format");
      }

      query.andWhere("recipe.created <= :created", { created: date });
    }

    if (filters?.duration) {
      query.andWhere("recipe.created <= :cooktime", {
        cooktime: filters.duration,
      });
    }

    if (filters?.ingredients) {
      const ingredients = filters.ingredients.split(",");
      query.andWhere("ingredient.name IN (:...ingredients)", { ingredients });
    }
    query.orderBy("recipe.created", "ASC");
    return query;
  }

  static async getrecipeById(id: string) {
    logger.debug(`Called getrecipeById`);
    return await AppDataSource.getRepository(Recipe).findOne({
      relations: ["ingredients", "ingredients.ingredient"],
      where: { id: Number(id) },
    });
  }

  static async createRecipie(data: RecipeDTO) {
    return await AppDataSource.transaction(async (manager) => {
      const recipeRepo = manager.getRepository(Recipe),
        ingredientRepo = manager.getRepository(Ingredient),
        recipeIngredientRepo = manager.getRepository(RecipeIngredient),
        {ingredients, ...recipeData} = data;

      const recipe = recipeRepo.create(mapToEntity(Recipe,recipeData));

      await recipeRepo.save(recipe);
      for (const ing of ingredients) {
        let ingredient: Ingredient | null;

        if (ing.ingredientId) {
          ingredient = await ingredientRepo.findOneBy({ id: ing.ingredientId });
          if (!ingredient) {
            throw new Error(`Ingredient with id ${ing.ingredientId} not found`);
          }
        } else {
          ingredient = await ingredientRepo.findOneBy({ name: ing.name });

          if (!ingredient) {
            ingredient = ingredientRepo.create(mapToEntity(Ingredient,ing));
            await ingredientRepo.save(ingredient);
          }
        }

        const recipeIngredient = recipeIngredientRepo.create({...mapToEntity(RecipeIngredient,ing),recipe,ingredient});

        await recipeIngredientRepo.save(recipeIngredient);
      }

      return recipeRepo.findOne({
        where: { id: recipe.id },
        relations: ["ingredients", "ingredients.ingredient"],
      });
    });
  }
}
