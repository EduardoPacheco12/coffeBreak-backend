import { Request, Response } from "express";
import * as drinkService from "../services/drinkService.js";

export async function getDrinksCategory(req: Request, res: Response) {
  const drinkCategories = await drinkService.getDrinksCategory();

  res.status(200).send(drinkCategories);
}
