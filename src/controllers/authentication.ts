import { Request, Response } from "express"
import jwt from "jsonwebtoken"

import User from "../schemas/User"

class AuthController {
    async authenticate(req: Request, res: Response) {
        const { email, password } = req.body
        
        const userSignin = await User.findOne({ email: email, password: password })

        if(!userSignin) {
            return res.status(404).send("User not found")
        }

        await delete userSignin.password

        const token = await jwt.sign({ id: userSignin.id }, "secret", { expiresIn: "1d" })

        return res.status(200).json({ userSignin, token })
    }
}

export default new AuthController();