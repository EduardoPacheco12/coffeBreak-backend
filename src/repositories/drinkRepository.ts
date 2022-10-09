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

export async function getUser(userId: number) {
  return await client.users.findUnique({
    where: {
      id: userId,
    },
  });
}

export async function getDrink(drinkId: number) {
  return await client.drinks.findUnique({
    where: {
      id: drinkId,
    },
  });
}

export async function addDrinkToCart(userId: number, drinkId: number) {
  return await client.drinkCarts.create({
    data: {
      userId,
      drinkId,
    },
  });
}
