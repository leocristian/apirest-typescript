import express, { Application, Request, Response } from "express";
import database from "./services/Database"

import classeRouter from "./routes/classe";
import userRouter from "./routes/user";
import commentRouter from "./routes/comment";

const app: Application = express();
const PORT: number = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

database.connect()

app.use("/api", userRouter)
app.use("/api", classeRouter)
app.use("/api", commentRouter)


export { app, PORT }