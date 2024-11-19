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
exports.deleteTask = exports.getTask = exports.getTasks = exports.clearTasks = exports.updateTask = exports.createTask = void 0;
const apiFeatures_1 = __importDefault(require("../utils/apiFeatures"));
const taskModel_1 = __importDefault(require("../model/taskModel"));
const convertFromKebab = (str) => str.split("-").join(" ");
const getTasks = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const features = new apiFeatures_1.default(taskModel_1.default.find(), req.query)
            .filter()
            .sort()
            .limitFields()
            .paginate();
        const tasks = yield features.query;
        res.status(302).json({
            status: "success",
            data: {
                tasks,
            },
        });
    }
    catch (error) {
        res.status(404).json({
            status: "fail",
            message: error,
        });
    }
});
exports.getTasks = getTasks;
const getTask = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = yield taskModel_1.default.findById(req.params.id);
        res.status(302).json({
            status: "success",
            data: {
                task,
            },
        });
    }
    catch (error) {
        res.status(404).json({
            status: "fail",
            message: error,
        });
    }
});
exports.getTask = getTask;
const createTask = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = yield taskModel_1.default.create(req.body);
        res.status(201).json({
            status: "success",
            data: {
                task,
            },
        });
    }
    catch (error) {
        res.status(400).json({
            status: "fail",
            message: error,
        });
    }
});
exports.createTask = createTask;
const updateTask = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const task = yield taskModel_1.default.findByIdAndUpdate(req.params.id, Object.assign(Object.assign({}, body), { updatedAt: Date.now() }), {
            new: true,
            runValidators: true,
        });
        res.status(200).json({
            status: "success",
            data: {
                task,
            },
        });
    }
    catch (error) {
        res.status(404).json({
            status: "fail",
            message: error,
        });
    }
});
exports.updateTask = updateTask;
const deleteTask = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = yield taskModel_1.default.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status: "success",
            data: null,
        });
    }
    catch (error) {
        res.status(404).json({
            status: "fail",
            message: error,
        });
    }
});
exports.deleteTask = deleteTask;
const clearTasks = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = yield taskModel_1.default.deleteMany();
        res.status(204).json({
            status: "success",
            data: null,
        });
    }
    catch (error) {
        res.status(400).json({
            status: "fail",
            message: error,
        });
    }
});
exports.clearTasks = clearTasks;
