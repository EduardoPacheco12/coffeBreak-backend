import { client } from "../databases/postgres.js";

export async function getBooksCategory() {
  return await client.bookCategories.findMany();
}
