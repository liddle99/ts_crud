import db from "../../../config/db";
import { Request, Response } from "express";

const middlewareCreate = (req: Request, res: Response) => {
    const title = req.body.title;
    const content = req.body.content;
    const category = req.body.category;
    const idx = req.body.idx;
    const sqlQuery =
        "update teamboard set title=?, content=?, category=? where idx=?";
    db.query(
        sqlQuery,
        [title, content, category, idx],
        (err: string, result: string) => {
            console.log(req.body.idx);
            res.send("success");
        }
    );
};

export default middlewareCreate;
