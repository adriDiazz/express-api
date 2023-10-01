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
exports.loginUser = exports.resgisterUserToDb = void 0;
const user_1 = __importDefault(require("../models/user"));
const jwt_1 = require("../utils/jwt");
const passwordHandle_1 = require("../utils/passwordHandle");
const resgisterUserToDb = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const exists = yield user_1.default.findOne({ email: user.email });
    if (exists)
        return undefined;
    const hashedPass = yield (0, passwordHandle_1.encrypt)(user.password);
    const newUser = {
        name: user.name,
        password: hashedPass,
        desc: user.desc,
        email: user.email,
    };
    const response = yield user_1.default.create(newUser);
    return response;
});
exports.resgisterUserToDb = resgisterUserToDb;
const loginUser = ({ email, password }) => __awaiter(void 0, void 0, void 0, function* () {
    const exists = yield user_1.default.findOne({ email: email });
    if (!exists)
        return undefined;
    const hashedPassword = exists === null || exists === void 0 ? void 0 : exists.password;
    const isValidPassword = (0, passwordHandle_1.verifyPassword)(password, hashedPassword);
    if (!isValidPassword)
        return undefined;
    const token = yield (0, jwt_1.generateJWT)({
        name: exists.name,
        email: exists.email,
        desc: exists.desc,
    });
    return {
        token,
        user: exists,
    };
});
exports.loginUser = loginUser;
