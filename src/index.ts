import express, { Application, Request, Response } from "express";

import classeRouter from "./routes/classe";
import userRouter from "./routes/user";
import commentRouter from "./routes/comment";

const server: Application = express();
const PORT: number = 3000

server.use(express.json())
server.use(express.urlencoded({ extended: true }));

server.use("/api", userRouter)
server.use("/api", classeRouter)
server.use("/api", commentRouter)

server.listen(PORT, (): void => {
    console.log(`Servidor rodando na porta: ${PORT}`)
})
