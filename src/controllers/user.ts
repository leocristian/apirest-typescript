import { Request, Response } from "express"
import User from "../models/user";
import database from "../services/database";

const userCollection = database.collection("user")

class UserController {
    async login(req: Request, res: Response) {
        const user = await userCollection.findOne({ name: req.body.name, email: req.body.email, password: req.body.password })

        if(!user) {
            return res.status(404).send("Usuário não encontrado!")
        } else {
            return res.status(200).send("Usuário encontrado!")
        }
    }
    async signup(req: Request, res: Response) {
        const newUser = new User(req.body)
    
        await userCollection.insertOne(newUser)
        
        return res.status(200).send("Usuário cadastrado")

    }
}

export = new UserController();