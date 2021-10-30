import db from "../../config/db";

const middlewareDelete = (req: any, res: any) => {
    const idx = req.body.idx;
    const sqlQuery = "delete from teamboard where idx=?";

    db.query(sqlQuery, [idx], (err: any, result: any) => {
        console.log(req.body);
        res.send("sex made");
    });
};
export default middlewareDelete;
