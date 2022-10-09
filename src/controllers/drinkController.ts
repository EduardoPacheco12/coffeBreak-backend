import { Request, Response } from "express";
import * as drinkService from "../services/drinkService.js";

export async function getDrinksCategory(req: Request, res: Response) {
  const drinkCategories = await drinkService.getDrinksCategory();

  res.status(200).send(drinkCategories);
}

export async function getDrinksByCategory(req: Request, res: Response) {
  const categoryId: number = Number(req.params.categoryId);

  const drinks = await drinkService.getDrinksByCategory(categoryId);

  res.status(200).send(drinks);
}

export async function addDrinkToCart(req: Request, res: Response) {
  const drinkId: number = Number(req.params.drinkId);
  const userId: number = res.locals.id;

  await drinkService.addDrinkToCart(userId, drinkId);

  res.sendStatus(201);
}
