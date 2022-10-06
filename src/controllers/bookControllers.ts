import { Request, Response } from "express";
import * as bookService from "../services/bookService.js";

export async function getBooksCategory(req: Request, res: Response) {
  const bookCategories = await bookService.getBooksCategory();

  res.status(200).send(bookCategories);
}

export async function getBooksByCategory(req: Request, res: Response) {
  const categoryId: number = Number(req.params.categoryId);

  const books = await bookService.getBooksByCategory(categoryId);

  res.status(200).send(books);
}
