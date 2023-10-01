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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCar = exports.updateCar = exports.getCarById = exports.getCars = exports.insertItem = void 0;
const item_1 = __importDefault(require("../models/item"));
const insertItem = (item) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield item_1.default.create(item);
    return response;
});
exports.insertItem = insertItem;
const getCars = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield item_1.default.find({});
    return response;
});
exports.getCars = getCars;
const getCarById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield item_1.default.findById({
        _id: id,
    });
    return response;
});
exports.getCarById = getCarById;
const updateCar = (id, car) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield item_1.default.findByIdAndUpdate({ _id: id }, car, {
        new: true,
    });
    return response;
});
exports.updateCar = updateCar;
const deleteCar = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield item_1.default.findByIdAndDelete({ _id: id });
    return response;
});
exports.deleteCar = deleteCar;
