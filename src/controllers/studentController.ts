import { NextFunction,Request,Response } from "express";
import Class, { IClass } from "../models/classModel";
import Student ,{ IStudent,IGrads } from "../models/studentsModel";
import Teacher ,{ITeacher} from "../models/teacherModel";

export const createStudent = async (req:Request,res:Response,next:NextFunction)=>{
    try {
        const userFind = await Student.findOne({email:req.body.email})|| await Teacher.findOne({email:req.body.email})
        if (userFind){
            throw new Error("your arede exist  ")
        }

        const  className :IClass |null = await Class.findOne({title:req.body.className})
        const user:IStudent = await Student.create(req.body);
        className?.students.push(user._id)
        const teacherId = user._id;
        className?.save()
        res.status(201).json({message:`your added tu ${className?.title}`})
    } catch (error) {
        next(error)
    }
}

export const getStudentGrads = async (req:Request,res:Response,next:NextFunction)=>{

    const StudentId = req.body.user.id;
    try {
        const student = await Student.findById(StudentId)
        const greeds = student?.grades
        res.status(200).json({greeds: greeds})

    } catch (error) {
     next(error)
    }
};





