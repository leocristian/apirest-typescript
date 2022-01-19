import express from "express";
import userController from "../controllers/user";
import authController from "../controllers/authentication"

const router = express.Router()

// router.get("api/classes", classeController.getAll)

router.post("/login", authController.authenticate)
router.post("/signup", userController.signup)

export = router