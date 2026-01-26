import { DataSource } from "typeorm";
import { Recipe } from "./models/recipe.entity";
import { Ingredient } from "./models/ingredient.entity";

export const AppDataSource = new DataSource({
    type:"postgres",
    host:process.env.DB_HOST,
    username:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    port: Number.parseInt(process.env.DB_PORT ?? "5432"),
    database:process.env.DB_NAME,
    ssl:{
        rejectUnauthorized:false
    },
    entities:[
        Recipe,
        Ingredient
    ],
    synchronize: process.env.ENVIRONMENT == 'DEVELOPMENT',
    logging:true
});