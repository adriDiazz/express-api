import { Request, Response, Router } from "express";
import {
  deleteItemById,
  getItemById,
  getItems,
  postItem,
  updateItemById,
} from "../controllers/item";
import { authMiddleware } from "../middelware/session";

const router = Router();

router.get("/", authMiddleware, getItems);

router.get("/:id", getItemById);

router.put("/:id", updateItemById);

router.delete("/:id", deleteItemById);

router.post("/", postItem);

export { router };
