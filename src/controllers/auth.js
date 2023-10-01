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
exports.login = exports.register = void 0;
const auth_1 = require("../services/auth");
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.body;
    const response = yield (0, auth_1.resgisterUserToDb)(user);
    const userResponse = response || "User already exists";
    res.send(userResponse);
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const response = yield (0, auth_1.loginUser)({ email, password });
    const finalResponse = response || "Something wrong with login";
    res.send(finalResponse);
});
exports.login = login;
