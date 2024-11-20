"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const templateController_1 = require("../controller/templateController");
const router = express_1.default.Router();
router.route("/").get(templateController_1.getTemplates).post(templateController_1.createTemplate);
router.route("/:id").get(templateController_1.getTemplate);
exports.default = router;
