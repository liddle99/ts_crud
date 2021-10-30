import db from "../../config/db";

const middlewareCreate = (req: any, res: any) => {
    const title = req.body.title;
    const content = req.body.content;
    const category = req.body.category;
    const sqlQuery =
        "INSERT INTO teamboard (title, content, category) VALUES (?, ?, ?);";
    db.query(sqlQuery, [title, content, category], (err: any, result: any) => {
        console.log(req.body);
        res.send("sex made");
    });
};

export default middlewareCreate;