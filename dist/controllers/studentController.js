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
exports.createStudent = void 0;
const classModel_1 = __importDefault(require("../models/classModel"));
const studentsModel_1 = __importDefault(require("../models/studentsModel"));
const teacherModel_1 = __importDefault(require("../models/teacherModel"));
const createStudent = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userFind = (yield studentsModel_1.default.findOne({ email: req.body.email })) || (yield teacherModel_1.default.findOne({ email: req.body.email }));
        if (userFind) {
            throw new Error("the email exsits ");
        }
        const className = yield classModel_1.default.findOne({ title: req.body.className });
        const user = yield studentsModel_1.default.create(req.body);
        className === null || className === void 0 ? void 0 : className.students.push(user._id);
        const classname = req.body.className;
        const teacherId = user._id;
        className === null || className === void 0 ? void 0 : className.save();
        res.status(201).json({});
    }
    catch (error) {
        next(error);
    }
});
exports.createStudent = createStudent;
