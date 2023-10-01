"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleErrors = void 0;
const handleErrors = (res, num, mess) => {
    res.status(500);
    res.send({
        error: mess,
    });
};
exports.handleErrors = handleErrors;
