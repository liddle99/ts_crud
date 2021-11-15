import { Sequelize } from "sequelize-typescript";
import db from "../config/config";
import users from "./models/user.models";

const sequelize = new Sequelize({
    dialect: "mysql",
    port: Number(db.users.prot),
    host: db.users.host,
    username: db.users.user,
    password: db.users.password,
    database: db.users.database,
    define: {
        charset: "utf8",
    },
});

const connection = async (force: boolean) => {
    sequelize.addModels([users]);
    const connect = await sequelize.sync({ force });

    if (!connect) {
        console.log("DB connection error");
        return false;
    } else {
        console.log("DB connection success");
        return true;
    }
};

export default connection;
