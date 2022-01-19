import express, { Application } from "express"
import database from "./services/Database"

import classeRouter from "./routes/classe";
import userRouter from "./routes/user";
import commentRouter from "./routes/comment";

class AppController {

    express: Application    
    constructor() {
        this.express = express()

        this.middlewares()
        this.connection()
        this.routes()
    }

    middlewares() {
        this.express.use(express.json())
        this.express.use(express.urlencoded({ extended: true }));
    }
    routes() {
        this.express
        .use(classeRouter)
        .use(userRouter)
        .use(commentRouter)
    }
    connection() {   
        database.connect()
    }
}

export default new AppController();