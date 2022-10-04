import * as bookRepository from "../repositories/bookRepository.js";

export async function getBooksCategory() {
  const bookCategories = await bookRepository.getBooksCategory();

  return bookCategories;
}
