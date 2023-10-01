import userModel from "../models/user";
import { Auth, User } from "../types/user";
import { generateJWT } from "../utils/jwt";
import { encrypt, verifyPassword } from "../utils/passwordHandle";

export const resgisterUserToDb = async (user: User) => {
  const exists = await userModel.findOne({ email: user.email });
  if (exists) return undefined;
  const hashedPass = await encrypt(user.password);
  const newUser: User = {
    name: user.name,
    password: hashedPass,
    desc: user.desc,
    email: user.email,
  };
  const response = await userModel.create(newUser);
  return response;
};

export const loginUser = async ({ email, password }: Auth) => {
  const exists = await userModel.findOne({ email: email });
  if (!exists) return undefined;

  const hashedPassword = exists?.password;
  const isValidPassword = verifyPassword(password, hashedPassword);
  if (!isValidPassword) return undefined;

  const token = await generateJWT({
    name: exists.name,
    email: exists.email,
    desc: exists.desc,
  });

  return {
    token,
    user: exists,
  };
};
