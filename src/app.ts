import express from "express";
import dotenv from "dotenv";
import teacherRouter from "./routes/teacherRoutes";
import studentRouter from "./routes/studentsRouter"
// import userRouter from "./routes/userRoutes";
import { errorHandler } from "./middleware/errorHandler";
import connectDB from "./config/db";
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from "./swagger";
import cp from "cookie-parser"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use('/swagger',swaggerUi.serve, swaggerUi.setup(swaggerSpec));
connectDB();
app.use(cp())

// Routes
app.use("/teacher", teacherRouter);
app.use("/student",studentRouter)
// app.use("/api/users", teacherRouter);


// Error handling middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
