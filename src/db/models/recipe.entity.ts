import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Ingredient } from "./ingredient.entity";

@Entity({
  name: "RECIPES",
})
export class Recipe {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  iconUrl: string;

  @CreateDateColumn()
  created: string;

  @Column()
  instructions: string;

  @Column()
  cooktime: number;

  @ManyToMany(() => Ingredient, (ingredient) => ingredient.recipes)
  @JoinTable({
    name: "recipie_ingredients",
    joinColumn: {
      name: "recipe_id",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: "ingredient_id",
      referencedColumnName: "id",
    },
  })
  ingredients: Ingredient[];
}
