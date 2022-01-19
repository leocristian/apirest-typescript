import express from "express";
import authMiddleware from "../middlewares/authMiddleware";
import classeController from "../controllers/classe";

const router = express.Router()

router.get("/classes", authMiddleware, classeController.getAll)
router.get("/classes/:id", authMiddleware, classeController.getById)
router.post("/classes", authMiddleware, classeController.create)
router.delete("/classes/:id", authMiddleware,classeController.deleteById)
router.put("/classes/:id", authMiddleware,classeController.updateById)

export = router