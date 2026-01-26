import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Recipe } from "./recipe.entity";

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
    recipes:Recipe[]
}   