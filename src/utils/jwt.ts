import { sign, verify } from "jsonwebtoken";
import { Payload, User } from "../types/user";

const JWT_SECRET = <string>process.env.JWT_SECRET;

export const generateJWT = async (user: Payload) => {
  const signedToken = sign(user, JWT_SECRET, {
    expiresIn: "2h",
  });
  return signedToken;
};

export const verifyToken = async (token: string) => {
  const isValid = verify(token, JWT_SECRET);
  return isValid;
};
