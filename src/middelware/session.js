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
exports.authMiddleware = void 0;
const jwt_1 = require("../utils/jwt");
const authMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = req.headers.authorization || "";
        const tokenSplitted = token === null || token === void 0 ? void 0 : token.split(" ")[1];
        const isValid = yield (0, jwt_1.verifyToken)(tokenSplitted);
        if (!isValid) {
            res.status(400);
            res.send("Not valid token");
        }
        else {
            req.user = isValid;
            next();
        }
    }
    catch (error) { }
});
exports.authMiddleware = authMiddleware;
