"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middeleWere_1 = require("../middleware/middeleWere");
const teacherController_1 = require("../controllers/teacherController");
const teacherRouter = (0, express_1.Router)();
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
teacherRouter.post("/register", teacherController_1.createTeacher);
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
teacherRouter.post("/loginTeacher", middeleWere_1.createToken);
// /**
//  * @swagger
//  * /teacher/addGrade:
//  * post:
//  *   summary: Add grade
//  *   requestBody:
//  *                required: true
//  *                content:
//  *                  application/json:
//  *                    schema:
//  *                      studentId
//  *                      type: string
//  *                      grade:
//  *                      type:object
//  *                        grade: number
//  *                        commend: string 
//  * responses:
//  *      201:
//  *         description: A JSON of the created user
//  */
teacherRouter.post("/addGrade", middeleWere_1.findUserByToken, teacherController_1.addGread);
/**
 * @swagger
 * /teacher/getAllStudents:
 *  get:
 *      summary: get the greeds
 *      responses:
 *          200:
 *              description: A JSON of the created user
 */
teacherRouter.get("/getAllStudents", middeleWere_1.findUserByToken, teacherController_1.getStudentsFromClass);
teacherRouter.post("/editGrade");
exports.default = teacherRouter;
