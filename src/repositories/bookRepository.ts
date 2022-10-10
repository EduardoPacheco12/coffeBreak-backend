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

export async function downStock(bookId: number, totalStock: number) {
  return await client.books.update({
    where: {
      id: bookId,
    },
    data: {
      totalStock: totalStock - 1,
    },
  });
}

export async function getBooksCart(userId: number) {
  return await client.bookCarts.findMany({
    where: {
      userId,
    },
    select: {
      book: true,
    },
  });
}

export async function findBookCart(userId: number, bookId: number) {
  return await client.bookCarts.findFirst({
    where: {
      userId,
      bookId,
    },
  });
}

export async function deleteBookCart(id: number) {
  return await client.bookCarts.delete({
    where: {
      id,
    },
  });
}

export async function upStock(bookId: number, totalStock: number) {
  return await client.books.update({
    where: {
      id: bookId,
    },
    data: {
      totalStock: totalStock + 1,
    },
  });
}
