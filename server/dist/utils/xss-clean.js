"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => (req, res, next) => {
    Object.keys(req.body).forEach((key) => {
        if (typeof req.body[key] === "string") {
            req.body[key] = xss(req.body[key]);
        }
    });
    next();
};
