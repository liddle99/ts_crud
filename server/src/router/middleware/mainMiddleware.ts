import db from "../../config/db";

const middlewareRead = (req: any, res: any) => {
    const sqlQuery = "SELECT * FROM teamboard;";
    db.query(sqlQuery, (err: any, result: any)=>{
        res.send(result);
    })
};

export default middlewareRead;