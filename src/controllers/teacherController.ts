import { NextFunction,Request,Response } from "express";
import Class, { IClass } from "../models/classModel";
import Student ,{ IStudent,IGrads } from "../models/studentsModel";
import Teacher ,{ITeacher} from "../models/teacherModel";

export const createTeacher = async (req:Request,res:Response,next:NextFunction)=>{
    try {
        

        const userFind = await Student.findOne({email:req.body.email})|| await Teacher.findOne({email:req.body.email})
        if (userFind){
            throw new Error("the email exsits ")
        }
        const findNameOfClass = await Class.findOne({title:req.body.className})
        if(findNameOfClass){
            throw new Error("className exsits")
        }
        const user:ITeacher = await Teacher.create(req.body);
        const classname = user.className;
        const teacherId = user._id;
        const clas:IClass = await Class.create({title:classname,teacher:teacherId})
        res.status(201).json({idOfClass:clas._id})
    } catch (error) {
        next(error)
    }
}

export const getStudentsFromClass = async  (req:Request,res:Response,next:NextFunction)=>{
    try {
        const teacher : string | undefined = req.body.user.id;
        const student = await Class.findOne({teacher:teacher}).populate({
            path:"students",
            select: "fullName,grades "
            
        });
        res.status(200).json({class:student})
    } catch (error) {
        next(error)
        
    }
}

export const addGread = async (req:Request,res:Response,next:NextFunction)=>{

    try {
        const grade :IGrads| null = req.body.grade
        const student = await Student.findById(req.body.studentId)
        if (!student) {
            throw new Error("student not found");
        }
        const UserId = req.body.user.id;
        const teacher = await Teacher.findById(UserId);
        if (!teacher) {
            throw new Error("teacher not found");
        } 
        student.grades.push(req.body.grade)
        res.status(201).json({student})
        }  
       


     catch (error) {
        next(error)
    }
}
