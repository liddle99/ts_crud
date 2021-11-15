require("dotenv").config();


export default {
    jwt: process.env.JWT || "key",
    users: {
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "0312",
    database: process.env.DB_DATABASE || "teamboard",
    prot: process.env.PORT || "3306",
    }
}