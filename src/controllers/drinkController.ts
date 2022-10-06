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
