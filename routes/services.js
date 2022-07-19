import express from "express";
import { getNameService } from "../controllers/ServiceController.js";
const router = express.Router();

router.get("/:name", getNameService);

export default router;
