import express from "express";
import cors from "cors";
import "dotenv/config";
import router from "./routes/index";
import { connectToMongo } from "./config/mongo";

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());
connectToMongo().then(() => console.log("Conexion realizada"));

app.use(router);

app.listen(PORT, () => console.log(`Listen to port ${PORT}`));
