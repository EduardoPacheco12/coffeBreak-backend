import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { notFoundError, unauthorizedError } from "../utils/errorUtils.js";

interface decodedId {
  id: string;
}

export async function validateTokenMiddleware(req: Request, res: Response, next: NextFunction) {
  const authorization: string | undefined = req.headers.authorization;
  if (!authorization) {
    throw notFoundError("Token not found");
  }

  const token = authorization?.replace("Bearer ", "");
  jwt.verify(token, process.env.SECRET!, function (err, decoded) {
    if (err) {
      throw unauthorizedError("Unauthorized");
    }
    res.locals.id = (decoded as decodedId).id;
    next();
  });
}
