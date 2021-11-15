import { Router } from "express";
import create from "../middleware/crud/createMiddleware";
import mainMiddleware from "../middleware/crud/mainMiddleware";
import readMiddleware from "../middleware/crud/readMiddleware";
import updateMiddleware from "../middleware/crud/updateMiddleware";
import middlewareDelete from "../middleware/crud/deleteMiddleware";
import jwtChecker from "../middleware/jwtChecker";

const router = Router();

router.post("/delete", middlewareDelete);
router.post("/insert", jwtChecker, create);
router.get("/read", jwtChecker, mainMiddleware);
router.get("/Content", jwtChecker, readMiddleware);
router.post("/update", updateMiddleware);

export default router;
