import express from "express";
import userController from "../controllers/user";

const router = express.Router()

// router.get("api/classes", classeController.getAll)

router.post("/login", userController.authenticate)
router.post("/signup", userController.signup)

export = router