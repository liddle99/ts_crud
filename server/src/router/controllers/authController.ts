import { Router } from "express";
import signUp from "../middleware/signup/signup";
import signIn from "../middleware/signIn/signIn";

const router = Router();
router.post("/signup", signUp);
router.post("/signIn", signIn);

export default router;
