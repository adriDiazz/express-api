import { Response } from "express";
export const handleErrors = (res: Response, num: number, mess: string) => {
  res.status(500);
  res.send({
    error: mess,
  });
};
