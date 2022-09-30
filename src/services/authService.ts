import { signInBody, signUpBody, usersPrismaSchema } from "../types/authTypes.js";
import * as authRepository from "../repositories/authRepository.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { conflictError, notFoundError, unauthorizedError } from "../utils/errorUtils.js";

export async function signUp(body: signUpBody) {
  const email: string = body.email;
  const password: string = body.password;
  const name: string = body.name;
  const pictureUrl: string = body.pictureUrl;

  const verifyEmail = await authRepository.verifyEmail(email);
  if (verifyEmail) {
    throw conflictError("Email already exists");
  }

  const encryptedPassword: string = bcrypt.hashSync(password, 10);

  await authRepository.insertUser(email, encryptedPassword, name, pictureUrl);
}

export async function signIn(body: signInBody) {
  const email: string = body.email;
  const password: string = body.password;

  const verifyEmail: usersPrismaSchema = (await authRepository.verifyEmail(email))!;
  if (!verifyEmail) {
    throw notFoundError("Email not found");
  }
  const id: number = verifyEmail.id;

  const verifyPassword: boolean = bcrypt.compareSync(password, verifyEmail.password);
  if (!verifyPassword) {
    throw unauthorizedError("Wrong password, try again");
  }

  const token = jwt.sign({ id }, process.env.SECRET!, {
    expiresIn: 36000, //3h
  });

  return token;
}
