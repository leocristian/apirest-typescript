import { Request, Response } from "express"
import { ObjectId } from "mongodb";
import User from "../schemas/User";
import bcrypt from "bcrypt"


class UserController {

    async login(req: Request, res: Response) {
        console.log("entrou");
        
        const user = await User.findOne({ name: req.body.name})
        console.log(user)

        const comparison = await bcrypt.compareSync(req.body.password, user.password)

        if(!comparison) {
            return res.status(404).send("User not found!")
        } else {
            return res.status(200).send("User found!")
        }
    }
    async signup(req: Request, res: Response) {

        const passwordReq = req.body.password

        const saltRouds = 10
        const generatedSalt = await bcrypt.genSaltSync(saltRouds)
        
        const hash = bcrypt.hashSync(passwordReq, generatedSalt)

        const newUser = {
            name: req.body.name,
            email: req.body.email,
            password: hash
        }
        
        if(await User.findOne({ email: newUser.email })) {
            return res.status(409).send("User already exists")
        }

        const result = await User.create(newUser)

        if(!result) {
            return res.status(500).send("Error on signup")
        } else {
            return res.status(200).send("User created sucesfuly")
        }
    }
}

export default new UserController();