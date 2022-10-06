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
