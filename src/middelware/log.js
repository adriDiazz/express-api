"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logMiddelware = void 0;
const logMiddelware = (req, res, next) => {
    console.log("Soy yo");
    next();
};
exports.logMiddelware = logMiddelware;
