import { client } from "../src/databases/postgres.js";
import { drinkCategories, bookCategories, drinks, books } from "./data/data.js";

async function main() {
  await client.drinkCategories.createMany({
    data: drinkCategories,
    skipDuplicates: true,
  });
  await client.bookCategories.createMany({
    data: bookCategories,
    skipDuplicates: true,
  });
  await client.drinks.createMany({
    data: drinks,
    skipDuplicates: true,
  });
  await client.books.createMany({
    data: books,
    skipDuplicates: true,
  });
}

main()
  .catch((error) => {
    console.log(error);
    process.exit(0);
  })
  .finally(() => {
    client.$disconnect();
  });
