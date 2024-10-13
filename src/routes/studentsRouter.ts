import { Router } from "express";
import {createToken,findUserByToken}from "../middleware/middeleWere"
import {
createStudent,
getStudentGrads

  
} from "../controllers/studentController";

const studentRouter = Router();
/**
 * @swagger
 * /student/register:
 *   post:  
 *     summary: Create a new student
 *     requestBody:
 *                required: true
 *                content:                          
 *                  application/json:
 *                    schema:   
 *                      type: object    
 *                      properties:
 *                        fullName:
 *                          type: string
 *                          description: The name of the user
 *                        email:
 *                          type: string
 *                          description: The email of the user  
 *                        password:
 *                          type: string
 *                          description: The email of the user
 *                        className:
 *                          type: string
 *                          description: the className
 *     responses:    
 *       201:               
 *         description: A JSON of the created user
 *  
 */
studentRouter.post("/register",createStudent);
/**
 * @swagger
 * /student/login:
 *   post:  
 *     summary: login student
 *     requestBody:
 *                required: true
 *                content:                          
 *                  application/json:
 *                    schema:   
 *                      type: object    
 *                      properties:
 *                        email:
 *                          type: string
 *                          description: The email of the user  
 *                        password:
 *                          type: string
 *                          description: The email of the user
 *     responses:    
 *       201:               
 *         description: A JSON of the created user
 */
studentRouter.post("/login",createToken );
/**
 * @swagger
 * /student/allGrads:
 *  get:
 *      summary: get the greeds 
 *      responses:
 *          200:
 *              description: get all greeds
 */
studentRouter.get("/allGrads" ,findUserByToken,getStudentGrads)



export default studentRouter;