import { Router } from "express";

import authController from "./authController";
import crudController from "./crudController";

const router = Router();

router.use("/auth", authController);
router.use(crudController);

export default router;
