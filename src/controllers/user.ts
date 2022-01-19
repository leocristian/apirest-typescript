import { Request, Response } from "express"
import { ObjectId } from "mongodb";
import User from "../schemas/User";

class UserController {
    async login(req: Request, res: Response) {
        console.log("entrou");
        
        const user = await User.find({ name: req.body.name})
        console.log(user)
        if(!user) {
            return res.status(404).send("User not found!")
        } else {

            return res.status(200).send("User found!")
        }
    }
    async signup(req: Request, res: Response) {

        const result = await User.create(req.body)
        
        if(!result) {
            return res.status(500).send("Error on signup")
        } else {
            return res.status(200).send("User created sucesfuly")
        }
    }
}

export default new UserController();