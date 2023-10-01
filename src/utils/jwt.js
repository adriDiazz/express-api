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
exports.verifyToken = exports.generateJWT = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
const generateJWT = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const signedToken = (0, jsonwebtoken_1.sign)(user, JWT_SECRET, {
        expiresIn: "2h",
    });
    return signedToken;
});
exports.generateJWT = generateJWT;
const verifyToken = (token) => __awaiter(void 0, void 0, void 0, function* () {
    const isValid = (0, jsonwebtoken_1.verify)(token, JWT_SECRET);
    return isValid;
});
exports.verifyToken = verifyToken;
