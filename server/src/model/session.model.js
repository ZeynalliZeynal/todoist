"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var date_fns_1 = require("date-fns");
var schema = new mongoose_1.default.Schema({
    userId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        index: true,
    },
    userAgent: {
        type: String,
    },
    expiresAt: {
        type: Date,
        default: (0, date_fns_1.addDays)(new Date(), 30),
    },
}, {
    timestamps: true,
});
exports.default = mongoose_1.default.model("Session", schema);
