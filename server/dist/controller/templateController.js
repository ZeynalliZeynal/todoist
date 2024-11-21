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
exports.createTemplate = exports.getTemplate = exports.getTemplates = void 0;
const templateModel_1 = __importDefault(require("../model/templateModel"));
const apiFeatures_1 = __importDefault(require("../utils/apiFeatures"));
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const appError_1 = __importDefault(require("../utils/appError"));
const getTemplates = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const features = new apiFeatures_1.default(templateModel_1.default.find(), req.query)
        .filter()
        .sort()
        .limitFields()
        .paginate();
    const templates = yield features.query;
    res.status(302).json({
        status: "success",
        data: {
            templates,
        },
    });
}));
exports.getTemplates = getTemplates;
const getTemplate = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const template = yield templateModel_1.default.findById(req.params.id);
    if (!template) {
        return next(new appError_1.default(`No task found with the id ${req.params.id}`, 404));
    }
    res.status(302).json({
        status: "success",
        data: {
            template,
        },
    });
}));
exports.getTemplate = getTemplate;
const createTemplate = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const template = yield templateModel_1.default.create({
        name: req.body.name,
        description: req.body.description,
        content: req.body.content,
        exampleUrl: req.body.exampleUrl,
        tags: req.body.tags,
        imageUrl: req.body.imageUrl,
        category: req.body.category,
    });
    res.status(201).json({
        status: "success",
        data: {
            template,
        },
    });
}));
exports.createTemplate = createTemplate;
