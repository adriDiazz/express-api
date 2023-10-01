import "dotenv/config";
import { connect } from "mongoose";

export const connectToMongo = async () => {
  const dbUri = <string>process.env.DB_URI;
  await connect(dbUri);
};
