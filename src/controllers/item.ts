import { Request, Response } from "express";
import {
  deleteCar,
  getCarById,
  getCars,
  insertItem,
  updateCar,
} from "../services/item";
import { handleErrors } from "../utils/handleErrors";

export const getItems = async (req: Request, res: Response) => {
  try {
    const response = await getCars();
    res.send(response);
  } catch (error) {
    handleErrors(res, 500, "Error getting cars");
  }
};

export const postItem = async (req: Request, res: Response) => {
  try {
    const response = await insertItem(req.body);
    res.send(response);
  } catch (error) {
    handleErrors(res, 500, "Error posting car");
  }
};

export const getItemById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await getCarById(id);
    res.send(response);
  } catch (error) {
    handleErrors(res, 500, "Error getting the car");
  }
};

export const updateItemById = async (req: Request, res: Response) => {
  try {
    const newCar = req.body;
    const { id } = req.params;
    const response = await updateCar(id, newCar);
    res.send(response);
  } catch (error) {
    handleErrors(res, 500, "Error updating the car");
  }
};

export const deleteItemById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await deleteCar(id);
    res.send(response);
  } catch (error) {
    handleErrors(res, 500, "Error deleting the car");
  }
};
