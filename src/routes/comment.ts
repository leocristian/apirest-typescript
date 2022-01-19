import express from "express";
import authMiddleware from "../middlewares/authMiddleware";
import commentController from "../controllers/comment";

const router = express.Router()

router.get("/classes/:id_class/comments", authMiddleware,commentController.getAll)
router.post("/classes/:id_class/comments", authMiddleware, commentController.create)
router.delete("/classes/:id_class/comment/:id", authMiddleware, commentController.deleteById)

export = router