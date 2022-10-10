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

export async function addBookToCart(req: Request, res: Response) {
  const bookId: number = Number(req.params.bookId);
  const userId: number = res.locals.id;
  const rentedDays: number = Number(req.body.rentedDays);

  await bookService.addBookToCart(userId, bookId, rentedDays);

  res.sendStatus(201);
}

export async function getBooksCart(req: Request, res: Response) {
  const userId: number = res.locals.id;

  const booksCart = await bookService.getBooksCart(userId);

  res.status(200).send(booksCart);
}

export async function deleteBookCart(req: Request, res: Response) {
  const userId: number = res.locals.id;
  const bookId: number = Number(req.params.bookId);

  await bookService.deleteBookCart(userId, bookId);

  res.sendStatus(204);
}
