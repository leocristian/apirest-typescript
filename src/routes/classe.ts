import express from "express";

import classeController from "../controllers/classe";

const router = express.Router()

router.get("/classes", classeController.getAll)
router.get("/classes/:id", classeController.getById)
router.post("/classes", classeController.create)
router.delete("/classes/:id", classeController.deleteById)

export = router