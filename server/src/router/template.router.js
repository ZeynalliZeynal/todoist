"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var template_controller_1 = require("../controller/template.controller");
var auth_controller_1 = require("../controller/auth.controller");
var router = express_1.default.Router();
router
    .route("/")
    .get(template_controller_1.getTemplates)
    .post((0, auth_controller_1.authorizeTo)(["admin"]), template_controller_1.createTemplate);
router.route("/:id").get(template_controller_1.getTemplate);
exports.default = router;
