import { Router } from "express";
import {createToken,findUserByToken}from "../middleware/middeleWere"
import {
createTeacher,
getStudentsFromClass
  
} from "../controllers/teacherController";

const teacherRouter = Router();
/**
 * @swagger
 * /teacher/register:
 *   post:  
 *     summary: Create a new teacher
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
teacherRouter.post("/register",createTeacher);
/**
 * @swagger
 * /teacher/loginTeacher:
 *   post:  
 *     summary: Create a new teacher
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
teacherRouter.post("/loginTeacher",createToken );

teacherRouter.put("/addGrade", );
/**
 * @swagger
 * /teacher/getAllStudents:
 *  get:
 *      summary: get the greeds 
 *      responses:
 *          200:
 *              description: A JSON of the created user
 */
teacherRouter.get("/getAllStudents",findUserByToken, getStudentsFromClass );
teacherRouter.post("/editGrade", );


export default teacherRouter;
