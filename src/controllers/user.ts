import { Request, Response } from "express"
import { ObjectId } from "mongodb";
import User from "../schemas/User";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

class UserController {

    async authenticate(req: Request, res: Response) {
        const { email, password } = req.body
        
        const userSignin = await User.findOne({ email: email })

        if(!userSignin) {
            return res.status(404).send("User not found")
        }

        await delete userSignin.password

        const token = await jwt.sign({ id: userSignin.id }, "secret", { expiresIn: "1d" })

        return res.status(200).json({ userSignin, token })
    }
    async signup(req: Request, res: Response) {

        const passwordReq = req.body.name

        if(!req.body.name || !req.body.email || !req.body.password) {
            return res.status(500).send("Fill in all fields!")
        }
        const saltRouds = 10
        const generatedSalt = bcrypt.genSaltSync(saltRouds)
        
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