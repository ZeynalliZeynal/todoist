"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.one_day_ms = void 0;
const date_fns_1 = require("date-fns");
exports.one_day_ms = 24 * 60 * 60 * 1000;
const dateUtils = {
    oneYearFromNow: () => (0, date_fns_1.addYears)(new Date(), 1),
    thirtyDaysFromNow: () => (0, date_fns_1.addDays)(new Date(), 30),
    fifteenMinutesFromNow: () => (0, date_fns_1.addMinutes)(new Date(), 15),
    fiveMinutesAgo: () => (0, date_fns_1.subMinutes)(new Date(), 5),
};
