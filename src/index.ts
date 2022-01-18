import express, { Application, Request, Response } from "express";

import classeRouter from "./routes/classe";
import userRouter from "./routes/user";

const server: Application = express();
const PORT: number = 3000

server.use(express.json())
server.use(express.urlencoded({ extended: true }));

server.use(userRouter)
server.use(classeRouter)

server.listen(PORT, (): void => {
    console.log(`Servidor rodando na porta: ${PORT}`)
})
