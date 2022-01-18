import { Request, Response } from "express"
import User from "../models/user";
import database from "../services/database";

const userCollection = database.collection("users")

class UserController {
    async login(req: Request, res: Response) {
        const user = await userCollection.findOne({ name: req.body.name, email: req.body.email, password: req.body.password })

        if(!user) {
            return res.status(404).send("User not found!")
        } else {
            return res.status(200).send("User found!")
        }
    }
    async signup(req: Request, res: Response) {
        const newUser = new User(req.body)
    
        const result = await userCollection.insertOne(newUser)
        
        if(!result) {
            return res.status(500).send("Error on signup")
        } else {
            return res.status(200).send("User created sucesfuly")
        }
    }
}

export = new UserController();