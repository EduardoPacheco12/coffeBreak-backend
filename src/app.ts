import express, { json } from "express";
import cors from "cors";
import "express-async-errors";
import { errorHandlerMiddleware } from "./middlewares/errorHandlerMiddleware.js";
import authRouter from "./routes/authRouter.js";
import userRouter from "./routes/userRouter.js";

const app = express();

app.use(cors());
app.use(json());

app.use(authRouter);
app.use(userRouter);
app.use(errorHandlerMiddleware);

export default app;
