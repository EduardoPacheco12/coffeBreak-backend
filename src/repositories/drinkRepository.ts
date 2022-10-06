import { client } from "../databases/postgres.js";

export async function getDrinksCategory() {
  return await client.drinkCategories.findMany();
}

export async function getDrinkCategory(categoryId: number) {
  return await client.drinkCategories.findUnique({
    where: {
      id: categoryId,
    },
  });
}

export async function getDrinksByCategory(categoryId: number) {
  return await client.drinks.findMany({
    where: {
      drinkCategoryId: categoryId,
    },
  });
}
