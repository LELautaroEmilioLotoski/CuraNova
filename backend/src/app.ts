import express from "express";
import cors from "cors";
import authRoute from "./routes/authRoute";
import appointmentsRoute from "./routes/appointmentsRoute";
import userRouter from "./routes/userRoute";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use(authRoute);
app.use(appointmentsRoute);
app.use(userRouter);

export default app;