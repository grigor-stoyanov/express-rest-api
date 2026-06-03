import { RecipeDTO } from "../interfaces";

export const SAMPLE_RECIPES: RecipeDTO[] = [
  {
    title: "Pancakes",
    iconUrl: "https://www.themealdb.com/images/media/meals/rwuyqx1511383174.jpg",
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
    iconUrl: "https://www.themealdb.com/images/media/meals/stpuws1511191310.jpg",
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
    iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Garlic_bread.jpg/480px-Garlic_bread.jpg",
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
    iconUrl: "https://www.themealdb.com/images/media/meals/yvpuuy1511797244.jpg",
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
    iconUrl: "https://www.themealdb.com/images/media/meals/ypxvwv1505333929.jpg",
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
    iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Caesar_salad_%281%29.jpg/480px-Caesar_salad_%281%29.jpg",
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
    iconUrl: "https://www.themealdb.com/images/media/meals/wuyd2h1765655837.jpg",
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
    iconUrl: "https://www.themealdb.com/images/media/meals/syqypv1486981727.jpg",
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
    iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Grilled_cheese_sandwich.jpg/480px-Grilled_cheese_sandwich.jpg",
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
    iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3n/Banana_smoothie.jpg/480px-Banana_smoothie.jpg",
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
    iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Mashed_potato.jpg/480px-Mashed_potato.jpg",
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
    iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Chicken_stir_fry.jpg/480px-Chicken_stir_fry.jpg",
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
    iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Avocado_toast_with_egg.jpg/480px-Avocado_toast_with_egg.jpg",
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
    iconUrl: "https://www.themealdb.com/images/media/meals/1548772327.jpg",
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

export const USERS = {
  1: {
    "email":"example@email.com",
    "plainTextPassword":"password",
    "passwordSalt":"b4sJaS4aisu1jd",
    "pictureUrl":"https://i.pravatar.cc/150?img=3",
    "isAdmin":false
  },
    2: {
    "email":"admin@email.com",
    "plainTextPassword":"topsecret",
    "passwordSalt":"X3t2gFDSasd",
    "pictureUrl":"https://i.pravatar.cc/150?img=5",
    "isAdmin":true
  }
}