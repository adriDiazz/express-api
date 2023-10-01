import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt";
import { Payload, User } from "../types/user";
import { JwtPayload } from "jsonwebtoken";

interface RequestExt extends Request {
  user?: string | JwtPayload;
}

export const authMiddleware = async (
  req: RequestExt,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization || "";
    const tokenSplitted = token?.split(" ")[1];

    const isValid = await verifyToken(tokenSplitted);
    if (!isValid) {
      res.status(400);
      res.send("Not valid token");
    } else {
      req.user = isValid;
      next();
    }
  } catch (error) {}
};
