import express, { json } from "express";
import cors from "cors";
import "express-async-errors";
import { errorHandlerMiddleware } from "./middlewares/errorHandlerMiddleware.js";
import authRouter from "./routes/authRouter.js";
import userRouter from "./routes/userRouter.js";
import bookRouter from "./routes/bookRouter.js";
import drinkRouter from "./routes/drinkRouter.js";

const app = express();

app.use(cors());
app.use(json());

app.use(authRouter);
app.use(userRouter);
app.use(bookRouter);
app.use(drinkRouter);
app.use(errorHandlerMiddleware);

export default app;
