import db from "../../../database/models/user.models";
import { Request, Response } from "express";

const signUp = (req: Request, res: Response) => {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    db.create({
        email: email,
        password: password,
        name: name,
    })
};
export default signUp;
