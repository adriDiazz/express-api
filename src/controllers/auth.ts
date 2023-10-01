import { Request, Response } from "express";
import { loginUser, resgisterUserToDb } from "../services/auth";
import { Auth } from "../types/user";
import { verifyPassword } from "../utils/passwordHandle";

export const register = async (req: Request, res: Response) => {
  const user = req.body;
  const response = await resgisterUserToDb(user);
  const userResponse = response || "User already exists";
  res.send(userResponse);
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const response = await loginUser({ email, password });
  const finalResponse = response || "Something wrong with login";
  res.send(finalResponse);
};
