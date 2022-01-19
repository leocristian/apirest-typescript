import express from "express";

import commentController from "../controllers/comment";

const router = express.Router()

router.get("/classes/:id_class/comments", commentController.getAll)
router.post("/classes/:id_class/comments", commentController.create)
router.delete("/classes/:id_class/comment/:id", commentController.deleteById)

export = router