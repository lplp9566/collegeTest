
import swaggerJSDoc from "swagger-jsdoc";

const swaggerDefintion = {
    openapi: '3.0.0',
    info:{
        title: "collegeTest",
        version: '1.0.0',
        description: 'this is the description of the '
    },
    servers: [
        {
            url: 'http://localhost:3000'
        }
    ]
}

const options = {
    definition: swaggerDefintion,
    apis: ['./src/routes/*.ts','./src/app.ts']
}

export const swaggerSpec = swaggerJSDoc(options);