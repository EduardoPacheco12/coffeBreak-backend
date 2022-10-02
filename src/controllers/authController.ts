import { Request, Response } from "express";
import { signInBody, signUpBody } from "../types/authTypes.js";
import * as authService from "../services/authService.js";

export async function signUp(req: Request, res: Response) {
  const body: signUpBody = req.body;

  await authService.signUp(body);
  res.status(201).send("User created");
}

export async function signIn(req: Request, res: Response) {
  const body: signInBody = req.body;

  const info = await authService.signIn(body);
  res.status(200).send(info);
}
