import { client } from "../databases/postgres.js";

export async function getDrinksCategory() {
  return await client.drinkCategories.findMany();
}
