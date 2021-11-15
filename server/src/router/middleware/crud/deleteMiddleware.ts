import db from "../../../config/db";
import { Request, Response } from 'express';


const middlewareDelete = (req: Request, res: Response) => {
    const idx = req.body.idx;
    const sqlQuery = "delete from teamboard where idx=?";

    db.query(sqlQuery, [idx], (err: string, result: string) => {
        console.log(req.body);
        res.send("success");
    });
};
export default middlewareDelete;