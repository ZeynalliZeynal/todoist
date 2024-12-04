"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var resend_1 = require("resend");
var env_1 = require("../constants/env");
var resend = new resend_1.Resend(env_1.resend_api_key);
exports.default = resend;
