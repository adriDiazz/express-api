export interface Auth {
  password: string;
  email: string;
}

export interface User extends Auth {
  name: string;
  desc: string;
}

export type Payload = Omit<User, "password">;
