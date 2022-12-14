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

export async function getDrinksCart(userId: number) {
  const verifyUser = await drinkRepository.getUser(userId);
  if (!verifyUser) {
    throw notFoundError("User not found");
  }

  const userDrinks = await drinkRepository.getDrinksCart(userId);
  const drinksCart = [];

  for (let i = 0; i < userDrinks.length; i++) {
    drinksCart.push(userDrinks[i].drink);
  }

  return drinksCart;
}

export async function deleteDrinkCart(userId: number, drinkId: number) {
  const verifyUser = await drinkRepository.getUser(userId);
  if (!verifyUser) {
    throw notFoundError("User not found");
  }

  const verifyDrink = await drinkRepository.getDrink(drinkId);
  if (!verifyDrink) {
    throw notFoundError("Drink not found");
  }

  const drinkCart = await drinkRepository.findDrinkCart(userId, drinkId);
  if (!drinkCart) {
    throw notFoundError("There is no such item in the user's cart");
  }

  await drinkRepository.deleteDrinkCart(drinkCart.id);
}
