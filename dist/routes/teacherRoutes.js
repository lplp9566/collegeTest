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
teacherRouter.put("/addGrade");
teacherRouter.get("/getAllStudents", teacherController_1.getStudentsFromClass);
teacherRouter.post("/editGrade");
exports.default = teacherRouter;
