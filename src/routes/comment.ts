import express from "express";

import commentController from "../controllers/comment";

const router = express.Router()

router.get("/classes/:id_class/comments", commentController.getAll)
router.post("/classes/:id_class", commentController.create)

export = router