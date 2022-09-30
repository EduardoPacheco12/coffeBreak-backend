import { users } from "@prisma/client";

export type usersPrismaSchema = users;

export type signUpBody = Omit<users, "id">;

export type signInBody = Omit<users, "id" | "pictureUrl" | "name">;
