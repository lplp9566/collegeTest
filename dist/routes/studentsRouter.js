"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middeleWere_1 = require("../middleware/middeleWere");
const studentController_1 = require("../controllers/studentController");
const studentRouter = (0, express_1.Router)();
/**
 * @swagger
 * /student/register:
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
studentRouter.post("/register", studentController_1.createStudent);
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
studentRouter.post("/loginTeacher", middeleWere_1.createToken);
exports.default = studentRouter;
