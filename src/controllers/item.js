"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteItemById = exports.updateItemById = exports.getItemById = exports.postItem = exports.getItems = void 0;
const item_1 = require("../services/item");
const handleErrors_1 = require("../utils/handleErrors");
const getItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, item_1.getCars)();
        res.send(response);
    }
    catch (error) {
        (0, handleErrors_1.handleErrors)(res, 500, "Error getting cars");
    }
});
exports.getItems = getItems;
const postItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, item_1.insertItem)(req.body);
        res.send(response);
    }
    catch (error) {
        (0, handleErrors_1.handleErrors)(res, 500, "Error posting car");
    }
});
exports.postItem = postItem;
const getItemById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const response = yield (0, item_1.getCarById)(id);
        res.send(response);
    }
    catch (error) {
        (0, handleErrors_1.handleErrors)(res, 500, "Error getting the car");
    }
});
exports.getItemById = getItemById;
const updateItemById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newCar = req.body;
        const { id } = req.params;
        const response = yield (0, item_1.updateCar)(id, newCar);
        res.send(response);
    }
    catch (error) {
        (0, handleErrors_1.handleErrors)(res, 500, "Error updating the car");
    }
});
exports.updateItemById = updateItemById;
const deleteItemById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const response = yield (0, item_1.deleteCar)(id);
        res.send(response);
    }
    catch (error) {
        (0, handleErrors_1.handleErrors)(res, 500, "Error deleting the car");
    }
});
exports.deleteItemById = deleteItemById;
