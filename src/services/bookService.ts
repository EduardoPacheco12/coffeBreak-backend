import * as bookRepository from "../repositories/bookRepository.js";
import { conflictError, notFoundError } from "../utils/errorUtils.js";

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

export async function addBookToCart(userId: number, bookId: number) {
  const verifyUser = await bookRepository.getUser(userId);
  if (!verifyUser) {
    throw notFoundError("User not found");
  }
  const verifyBook = await bookRepository.getBook(bookId);
  if (!verifyBook) {
    throw notFoundError("Book not found");
  }
  const totalStock = verifyBook.totalStock;

  if (verifyBook.totalStock > 0) {
    await bookRepository.addBookToCart(userId, bookId);
    await bookRepository.downStock(bookId, totalStock);
  } else {
    throw conflictError("The stock of books has run out");
  }
}

export async function getBooksCart(userId: number) {
  const userBooks = await bookRepository.getBooksCart(userId);
  const booksCart = [];

  for (let i = 0; i < userBooks.length; i++) {
    booksCart.push(userBooks[i].book);
  }

  return booksCart;
}

export async function deleteBookCart(userId: number, bookId: number) {
  const verifyUser = await bookRepository.getUser(userId);
  if (!verifyUser) {
    throw notFoundError("User not found");
  }

  const verifyBook = await bookRepository.getBook(bookId);
  if (!verifyBook) {
    throw notFoundError("Book not found");
  }

  const bookCart = await bookRepository.findBookCart(userId, bookId);
  if (!bookCart) {
    throw notFoundError("There is no such item in the user's cart");
  }

  await bookRepository.deleteBookCart(bookCart.id);
  await bookRepository.upStock(bookId, verifyBook.totalStock);
}
