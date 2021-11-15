import db from "../../../config/db";
import { Request, Response } from "express";

const readMiddleware = (req: Request, res: Response) => {
    const sql =
        "SELECT idx, title, content, category FROM `teamboard` WHERE `idx` = ?";
    const params = req.query.idx;
    db.query(sql, params, (err: string, data: any) => {
        if (!err) {
            res.send(data);
        } else {
            res.send(err);
        }
    });
};

export default readMiddleware;
