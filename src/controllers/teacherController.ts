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
        const teacher : string | undefined = req.body.id;
        const student = await Class.findOne({teacher:teacher}).populate({
            path:"students",
            select: "fullName,grades "
            
        });
        res.status(200).json({class:student})
    } catch (error) {
        next(error)
        
    }
}