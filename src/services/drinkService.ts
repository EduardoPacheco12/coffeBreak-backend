import * as drinkRepository from "../repositories/drinkRepository.js";

export async function getDrinksCategory() {
  const drinkCategories = await drinkRepository.getDrinksCategory();

  return drinkCategories;
}
