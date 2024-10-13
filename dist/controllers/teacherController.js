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
exports.addGread = exports.getStudentsFromClass = exports.createTeacher = void 0;
const classModel_1 = __importDefault(require("../models/classModel"));
const studentsModel_1 = __importDefault(require("../models/studentsModel"));
const teacherModel_1 = __importDefault(require("../models/teacherModel"));
const createTeacher = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userFind = (yield studentsModel_1.default.findOne({ email: req.body.email })) || (yield teacherModel_1.default.findOne({ email: req.body.email }));
        if (userFind) {
            throw new Error("the email exsits ");
        }
        const findNameOfClass = yield classModel_1.default.findOne({ title: req.body.className });
        if (findNameOfClass) {
            throw new Error("className exsits");
        }
        const user = yield teacherModel_1.default.create(req.body);
        const classname = user.className;
        const teacherId = user._id;
        const clas = yield classModel_1.default.create({ title: classname, teacher: teacherId });
        res.status(201).json({ idOfClass: clas._id });
    }
    catch (error) {
        next(error);
    }
});
exports.createTeacher = createTeacher;
const getStudentsFromClass = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const teacher = req.body.user.id;
        const student = yield classModel_1.default.findOne({ teacher: teacher }).populate({
            path: "students",
            select: "fullName,grades "
        });
        res.status(200).json({ class: student });
    }
    catch (error) {
        next(error);
    }
});
exports.getStudentsFromClass = getStudentsFromClass;
const addGread = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
    }
});
exports.addGread = addGread;
