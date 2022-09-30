import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

interface decodedId {
  id: string;
}

export async function validateTokenMiddleware(req: Request, res: Response, next: NextFunction) {
  const authorization: string | undefined = req.headers.authorization;
  if (!authorization) {
    throw { type: "not_found", message: "Token not found" };
  }

  const token = authorization?.replace("Bearer ", "");
  jwt.verify(token, process.env.SECRET!, function (err, decoded) {
    if (err) {
      throw { type: "unauthorized", message: "unauthorized" };
    }
    res.locals.id = (decoded as decodedId).id;
    next();
  });
}
