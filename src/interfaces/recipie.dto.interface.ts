export interface RecipeDTO {
  id?:number
  title: string;
  iconUrl: string;
  instructions: string;
  cooktime: number;

  ingredients: {
    ingredientId?: number;
    name: string;
    amount: number;
    unit: string;
  }[];
}