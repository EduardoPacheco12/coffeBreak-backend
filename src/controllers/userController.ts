import { Request, Response } from "express";
import * as userService from "../services/userService.js";

export async function searchUser(req: Request, res: Response) {
  const id: number = res.locals.id;

  res.sendStatus(200);
}
