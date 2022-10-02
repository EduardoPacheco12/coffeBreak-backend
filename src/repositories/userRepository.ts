import { client } from "../databases/postgres.js";

export async function verifyUser(id: number) {
  return await client.users.findUnique({
    where: {
      id,
    },
  });
}
