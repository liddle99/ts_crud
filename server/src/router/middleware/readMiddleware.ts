import db from "../../config/db";
 
const readMiddleware = (req: any, res: any) => {
    const sql = 'SELECT idx, title, content FROM `teamboard` WHERE `idx` = ?';
    const params = req.query.idx
    db.query(sql, params, (err: any, data: any) => {
        if(!err) {
            res.send(data)
        } else {
            res.send(err)
        }
    })
}

export default readMiddleware;