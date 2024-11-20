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
const getTemplates = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
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
    }
    catch (error) {
        res.status(404).json({
            status: "fail",
            message: error,
        });
    }
});
exports.getTemplates = getTemplates;
const getTemplate = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const template = yield templateModel_1.default.findById(req.params.id);
        res.status(302).json({
            status: "success",
            data: {
                template,
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
exports.getTemplate = getTemplate;
const createTemplate = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
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
    }
    catch (error) {
        res.status(400).json({
            status: "fail",
            message: error,
        });
    }
});
exports.createTemplate = createTemplate;
