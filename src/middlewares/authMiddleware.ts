import { Request, Response, NextFunction } from "express"
import jwt, { JwtPayload } from "jsonwebtoken"

export default function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers

    if(!authorization) {
        return res.status(401).send("User not authorized!")
    }

    const token = authorization.replace("Bearer", "").trim()

    try {
        const data = jwt.verify(token, "secret")

        const { id } = data as JwtPayload

        req.userId = id

        return next()
    } catch {
        return res.status(401).send("User not authorized!")
    }
}