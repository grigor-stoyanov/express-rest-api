import { Column, Entity, OneToMany, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Recipe } from "./recipe.entity";
import { IngredientInterface } from "../../interfaces";
import { RecipeIngredient } from "./recipie.ingredients.entity";

@Entity({
    name:"INGREDIENTS"
})
export class Ingredient implements IngredientInterface{
    @PrimaryGeneratedColumn()
    id!:number;

    @Column()
    name!:string;

    @OneToMany(() => RecipeIngredient, ri => ri.ingredient)
    usages!: RecipeIngredient[];
}   