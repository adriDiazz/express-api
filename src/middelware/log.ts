import { NextFunction, Request, Response } from "express";

export const logMiddelware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("Soy yo");
  next();
};
