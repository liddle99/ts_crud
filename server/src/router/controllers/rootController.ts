import { Router } from "express";
import create from "../middleware/createMiddleware";
import mainMiddleware from "../middleware/mainMiddleware";
import readMiddleware from "../middleware/readMiddleware";
import updateMiddleware from "../middleware/updateMiddleware";
import middlewareDelete from "../middleware/deleteMiddleware";

const router = Router();

router.post("/delete", middlewareDelete);
router.post("/insert", create);
router.get("/read", mainMiddleware);
router.get("/Content", readMiddleware);
router.post("/update", updateMiddleware);

export default router;
