import { RecipeDTO } from "../interfaces";

export const SAMPLE_RECIPES: RecipeDTO[] = [
  {
    title: "Pancakes",
    iconUrl: "https://example.com/pancakes.png",
    instructions: "Mix ingredients and fry until golden.",
    cooktime: 15,
    ingredients: [
      { name: "Flour", amount: 200, unit: "g" },
      { name: "Milk", amount: 300, unit: "ml" },
      { name: "Eggs", amount: 2, unit: "pcs" }
    ]
  },
  {
    title: "Tomato Soup",
    iconUrl: "https://example.com/tomato-soup.png",
    instructions: "Boil tomatoes, blend, season, and simmer.",
    cooktime: 25,
    ingredients: [
      { name: "Tomato", amount: 4, unit: "pcs" },
      { name: "Salt", amount: 1, unit: "tsp" },
      { name: "Butter", amount: 20, unit: "g" }
    ]
  },
  {
    title: "Garlic Bread",
    iconUrl: "https://example.com/garlic-bread.png",
    instructions: "Spread garlic butter on bread and bake.",
    cooktime: 10,
    ingredients: [
      { name: "Bread", amount: 1, unit: "pcs" },
      { name: "Butter", amount: 30, unit: "g" },
      { name: "Garlic", amount: 2, unit: "cloves" }
    ]
  },
  {
    title: "Omelette",
    iconUrl: "https://example.com/omelette.png",
    instructions: "Beat eggs, season, and cook in butter.",
    cooktime: 5,
    ingredients: [
      { name: "Eggs", amount: 3, unit: "pcs" },
      { name: "Salt", amount: 1, unit: "tsp" },
      { name: "Butter", amount: 10, unit: "g" }
    ]
  },
  {
    title: "Beef Tacos",
    iconUrl: "https://example.com/beef-tacos.png",
    instructions: "Cook beef with spices, assemble in tortillas.",
    cooktime: 20,
    ingredients: [
      { name: "Ground Beef", amount: 300, unit: "g" },
      { name: "Tortilla", amount: 4, unit: "pcs" },
      { name: "Cheese", amount: 50, unit: "g" },
      { name: "Tomato", amount: 1, unit: "pcs" }
    ]
  },
  {
    title: "Caesar Salad",
    iconUrl: "https://example.com/caesar-salad.png",
    instructions: "Chop lettuce, add dressing, croutons, and cheese.",
    cooktime: 10,
    ingredients: [
      { name: "Lettuce", amount: 1, unit: "pcs" },
      { name: "Croutons", amount: 50, unit: "g" },
      { name: "Parmesan", amount: 20, unit: "g" },
      { name: "Caesar Dressing", amount: 30, unit: "ml" }
    ]
  },
  {
    title: "Fried Rice",
    iconUrl: "https://example.com/fried-rice.png",
    instructions: "Stir fry rice with vegetables and soy sauce.",
    cooktime: 15,
    ingredients: [
      { name: "Rice", amount: 200, unit: "g" },
      { name: "Carrot", amount: 1, unit: "pcs" },
      { name: "Peas", amount: 50, unit: "g" },
      { name: "Soy Sauce", amount: 20, unit: "ml" },
      { name: "Eggs", amount: 1, unit: "pcs" }
    ]
  },
  {
    title: "Chicken Alfredo",
    iconUrl: "https://example.com/chicken-alfredo.png",
    instructions: "Cook pasta, prepare creamy sauce, mix with chicken.",
    cooktime: 25,
    ingredients: [
      { name: "Pasta", amount: 200, unit: "g" },
      { name: "Chicken Breast", amount: 150, unit: "g" },
      { name: "Cream", amount: 100, unit: "ml" },
      { name: "Parmesan", amount: 30, unit: "g" }
    ]
  },
  {
    title: "Grilled Cheese Sandwich",
    iconUrl: "https://example.com/grilled-cheese.png",
    instructions: "Butter bread, add cheese, grill until golden.",
    cooktime: 5,
    ingredients: [
      { name: "Bread", amount: 2, unit: "pcs" },
      { name: "Cheese", amount: 40, unit: "g" },
      { name: "Butter", amount: 10, unit: "g" }
    ]
  },
  {
    title: "Banana Smoothie",
    iconUrl: "https://example.com/banana-smoothie.png",
    instructions: "Blend banana, milk, and honey until smooth.",
    cooktime: 3,
    ingredients: [
      { name: "Banana", amount: 1, unit: "pcs" },
      { name: "Milk", amount: 200, unit: "ml" },
      { name: "Honey", amount: 1, unit: "tbsp" }
    ]
  },
  {
    title: "Mashed Potatoes",
    iconUrl: "https://example.com/mashed-potatoes.png",
    instructions: "Boil potatoes, mash with butter and milk.",
    cooktime: 20,
    ingredients: [
      { name: "Potato", amount: 3, unit: "pcs" },
      { name: "Butter", amount: 20, unit: "g" },
      { name: "Milk", amount: 50, unit: "ml" },
      { name: "Salt", amount: 1, unit: "tsp" }
    ]
  },
  {
    title: "Stir Fry Chicken",
    iconUrl: "https://example.com/stir-fry-chicken.png",
    instructions: "Cook chicken, add vegetables, stir fry with sauce.",
    cooktime: 18,
    ingredients: [
      { name: "Chicken Breast", amount: 200, unit: "g" },
      { name: "Bell Pepper", amount: 1, unit: "pcs" },
      { name: "Soy Sauce", amount: 15, unit: "ml" },
      { name: "Garlic", amount: 2, unit: "cloves" }
    ]
  },
  {
    title: "Avocado Toast",
    iconUrl: "https://example.com/avocado-toast.png",
    instructions: "Toast bread, mash avocado, spread and season.",
    cooktime: 5,
    ingredients: [
      { name: "Bread", amount: 1, unit: "pcs" },
      { name: "Avocado", amount: 1, unit: "pcs" },
      { name: "Salt", amount: 1, unit: "tsp" }
    ]
  },
  {
    title: "Baked Salmon",
    iconUrl: "https://example.com/baked-salmon.png",
    instructions: "Season salmon and bake until flaky.",
    cooktime: 15,
    ingredients: [
      { name: "Salmon", amount: 200, unit: "g" },
      { name: "Lemon", amount: 1, unit: "pcs" },
      { name: "Salt", amount: 1, unit: "tsp" },
      { name: "Butter", amount: 10, unit: "g" }
    ]
  }
];