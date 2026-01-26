import { Request,Response } from "express";
import { logger } from "../../logger";
import { AppDataSource } from "../datasource";
import { Recipe } from "../models/recipe";

export async function getAllRecipes(request:Request, response:Response){
    logger.debug(`Called getAllRecipes`);
    
    const recipes = await AppDataSource.getRepository(Recipe)
    .createQueryBuilder("recipes")
    .orderBy("created")
    .getMany();

    response.status(200).json({recipes});
}