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
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const appError_1 = __importDefault(require("../utils/appError"));
const getTasks = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.user)
        return next(new appError_1.default("You have to log in.", 401));
    const features = new apiFeatures_1.default(taskModel_1.default.find({
        user: req.user,
    }), req.query)
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
}));
exports.getTasks = getTasks;
const getTask = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const task = yield taskModel_1.default.findById(req.params.id);
    if (!task) {
        return next(new appError_1.default(`No task found with the id ${req.params.id}`, 404));
    }
    res.status(302).json({
        status: "success",
        data: {
            task,
        },
    });
}));
exports.getTask = getTask;
const createTask = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const task = yield taskModel_1.default.create({
        name: req.body.name,
        description: req.body.description,
        completed: req.body.completed,
        tags: req.body.tags,
        dueDate: req.body.dueDate,
        priority: req.body.priority,
        user: req.user,
    });
    res.status(201).json({
        status: "success",
        data: {
            task,
        },
    });
}));
exports.createTask = createTask;
const updateTask = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const task = yield taskModel_1.default.findByIdAndUpdate(req.params.id, Object.assign(Object.assign({}, body), { updatedAt: Date.now() }), {
        new: true,
        runValidators: true,
    });
    if (!task) {
        return next(new appError_1.default(`No task found with the id ${req.params.id}`, 404));
    }
    res.status(200).json({
        status: "success",
        data: {
            task,
        },
    });
}));
exports.updateTask = updateTask;
const deleteTask = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const task = yield taskModel_1.default.findByIdAndDelete(req.params.id);
    if (!task) {
        return next(new appError_1.default(`No task found with the id ${req.params.id}`, 404));
    }
    res.status(204).json({
        status: "success",
        data: null,
    });
}));
exports.deleteTask = deleteTask;
const clearTasks = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield taskModel_1.default.deleteMany();
    res.status(204).json({
        status: "success",
        data: null,
    });
}));
exports.clearTasks = clearTasks;
