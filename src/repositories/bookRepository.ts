import { client } from "../databases/postgres.js";

export async function getBooksCategory() {
  return await client.bookCategories.findMany();
}

export async function getBookCategory(categoryId: number) {
  return await client.bookCategories.findUnique({
    where: {
      id: categoryId,
    },
  });
}

export async function getBooksByCategory(categoryId: number) {
  return await client.books.findMany({
    where: {
      bookCategoryId: categoryId,
    },
  });
}

export async function getUser(userId: number) {
  return await client.users.findUnique({
    where: {
      id: userId,
    },
  });
}

export async function getBook(bookId: number) {
  return await client.books.findUnique({
    where: {
      id: bookId,
    },
  });
}

export async function addBookToCart(userId: number, bookId: number) {
  return await client.bookCarts.create({
    data: {
      userId,
      bookId,
    },
  });
}

export async function updateStock(bookId: number, totalStock: number) {
  return await client.books.update({
    where: {
      id: bookId,
    },
    data: {
      totalStock: totalStock - 1,
    },
  });
}
