import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Recipe } from "./recipe";

@Entity({
    name:"INGREDIENTS"
})
export class Ingredient {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;
    
    @Column()
    unit:string;


    @ManyToMany(()=> Recipe,(recipe) => recipe.ingredients)
    @JoinTable({
        name: "recipie_ingredients",
        joinColumn:{
            name:"recipe_id",
            referencedColumnName:"id",
            foreignKeyConstraintName:"fk_recipe_ingredients_recipe"
        },
        inverseJoinColumn:{
            name:"ingredient_id",
            referencedColumnName:"id",
            foreignKeyConstraintName:"fk_recipe_ingredients_ingredient"
        }
    })
    recipes:Recipe[]
}   