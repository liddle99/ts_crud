import db from "../../../config/db";
import { Request, Response } from "express";

const middlewareCreate = (req: Request, res: Response) => {
    console.log(res.locals.user)
    const title = req.body.title;
    const content = req.body.content;
    const category = req.body.category;
    const sqlQuery =
        "INSERT INTO teamboard (title, content, category) VALUES (?, ?, ?);";
        // console.log(req.body);
    db.query(
        sqlQuery,
        [title, content, category],
        (err: string, result: string) => {
            
            res.send("success");
        }
    );
};

export default middlewareCreate;
