import itemModel from "../models/item";
import { Car } from "../types/car";

export const insertItem = async (item: Car) => {
  const response = await itemModel.create(item);
  return response;
};

export const getCars = async () => {
  const response = await itemModel.find({});
  return response;
};

export const getCarById = async (id: string) => {
  const response = await itemModel.findById({
    _id: id,
  });
  return response;
};

export const updateCar = async (id: string, car: Car) => {
  const response = await itemModel.findByIdAndUpdate({ _id: id }, car, {
    new: true,
  });
  return response;
};

export const deleteCar = async (id: string) => {
  const response = await itemModel.findByIdAndDelete({ _id: id });
  return response;
};
