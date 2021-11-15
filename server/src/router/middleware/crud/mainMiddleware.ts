import db from "../../../config/db";
import { Request, Response } from 'express';

const middlewareRead = (req: Request, res: Response) => {
    const sqlQuery = "SELECT * FROM teamboard;";
    db.query(sqlQuery, (err: string, result: any) => {
        res.send(result);
    });
};

export default middlewareRead;
