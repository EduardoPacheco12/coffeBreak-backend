import { client } from "../databases/postgres.js";

export async function verifyEmail(email: string) {
  return await client.users.findUnique({
    where: {
      email,
    },
  });
}

export async function insertUser(email: string, password: string, name: string, pictureUrl: string) {
  return await client.users.create({
    data: {
      email,
      password,
      name,
      pictureUrl,
    },
  });
}
