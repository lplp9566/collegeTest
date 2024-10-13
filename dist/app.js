"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const teacherRoutes_1 = __importDefault(require("./routes/teacherRoutes"));
const studentsRouter_1 = __importDefault(require("./routes/studentsRouter"));
// import userRouter from "./routes/userRoutes";
const errorHandler_1 = require("./middleware/errorHandler");
const db_1 = __importDefault(require("./config/db"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_1 = require("./swagger");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Middleware
app.use(express_1.default.json());
app.use('/swagger', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.swaggerSpec));
(0, db_1.default)();
app.use((0, cookie_parser_1.default)());
// Routes
app.use("/teacher", teacherRoutes_1.default);
app.use("/student", studentsRouter_1.default);
// app.use("/api/users", teacherRouter);
// Error handling middleware
app.use(errorHandler_1.errorHandler);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
exports.default = app;
