import express, { Request, Response } from "express";
import userController from "../controllers/user";

const router = express.Router()

// router.get("api/classes", classeController.getAll)

router.post("/api/login", userController.login)
router.post("/api/signup", userController.signup)

export = router