import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, Unique} from "typeorm";
import { Recipe } from "./recipe.entity";
import { RecipeIngredientInterface } from "../../interfaces";
import { Ingredient } from "./ingredient.entity";

@Entity({ name: "RECIPE_INGREDIENTS" })
@Unique(["recipe", "ingredient"])
export class RecipeIngredient implements RecipeIngredientInterface {
  @PrimaryGeneratedColumn()
  id!: string;

  @ManyToOne(() => Recipe, recipe => recipe.ingredients, { onDelete: "CASCADE" })
  recipe!: Recipe;

  @ManyToOne(() => Ingredient, ingredient => ingredient.usages)
  ingredient!: Ingredient;

  @Column()
  amount!: number;

  @Column()
  unit!: string;
}