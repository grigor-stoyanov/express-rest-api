import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Ingredient } from "./ingredient";

@Entity({
    name:"RECIPES"
})
export class Recipe {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    title:string;
    
    @Column()
    iconUrl:string;

    @CreateDateColumn()
    created: string

    @Column()
    instructions:string;
    
    @Column()
    cooktime:number;

    @ManyToMany(()=>Ingredient, (ingredient) => ingredient.recipes)
    ingredients:Ingredient[];
}   