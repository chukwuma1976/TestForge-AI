import express from "express";
import { generateTest } from "../controllers/testController.js";
import { downloadProject } from "../controllers/fileDownloadController.js";

const router = express.Router();

router.post("/generate", generateTest);
router.post("/download", downloadProject);

export default router;