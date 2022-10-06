import * as bookRepository from "../repositories/bookRepository.js";
import { notFoundError } from "../utils/errorUtils.js";

export async function getBooksCategory() {
  const bookCategories = await bookRepository.getBooksCategory();

  return bookCategories;
}

export async function getBooksByCategory(categoryId: number) {
  const verifyCategory = await bookRepository.getBookCategory(categoryId);
  if (!verifyCategory) {
    throw notFoundError("Category not found");
  }

  const books = await bookRepository.getBooksByCategory(categoryId);

  return books;
}
