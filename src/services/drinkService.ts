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
