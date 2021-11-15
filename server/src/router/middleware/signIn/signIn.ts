import SignInService from "../../../service/signIn";
import { Request, Response } from "express";

const signInMiddleware = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const { token, user } = await SignInService({ email, password });
    res.json({
        message: "login success",
        data: { token, user },
    });
};
export default signInMiddleware;
