import * as drinkRepository from "../repositories/drinkRepository.js";
import { notFoundError } from "../utils/errorUtils.js";

export async function getDrinksCategory() {
  const drinkCategories = await drinkRepository.getDrinksCategory();

  return drinkCategories;
}

export async function getDrinksByCategory(categoryId: number) {
  const verifyCategory = await drinkRepository.getDrinkCategory(categoryId);
  if (!verifyCategory) {
    throw notFoundError("Category not found");
  }

  const drinks = await drinkRepository.getDrinksByCategory(categoryId);

  return drinks;
}

export async function addDrinkToCart(userId: number, drinkId: number) {
  const verifyUser = await drinkRepository.getUser(userId);
  if (!verifyUser) {
    throw notFoundError("User not found");
  }
  const verifyDrink = await drinkRepository.getDrink(drinkId);
  if (!verifyDrink) {
    throw notFoundError("Drink not found");
  }

  await drinkRepository.addDrinkToCart(userId, drinkId);
}
