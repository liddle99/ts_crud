const mysql = require("mysql");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "0312",
    database: "teamboard",
});

export default db;
