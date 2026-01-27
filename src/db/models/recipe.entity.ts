import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { RecipeInterface } from "../../interfaces";
import { RecipeIngredient } from "./recipie.ingredients.entity";


@Entity({
  name: "RECIPES",
})
export class Recipe implements RecipeInterface {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  iconUrl!: string;

  @CreateDateColumn()
  created!: Date;

  @Column()
  instructions!: string;

  @Column()
  cooktime!: number;

  @OneToMany(() => RecipeIngredient, ri => ri.recipe, { cascade: true })
  ingredients!: RecipeIngredient[];
}
