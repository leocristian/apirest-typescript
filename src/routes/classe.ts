import express, { Request, Response } from "express";

import classeController from "../controllers/classe";


const router = express.Router()

router.get("/api/classes", classeController.getAll)
router.post("/api/classes", classeController.create)

export = router