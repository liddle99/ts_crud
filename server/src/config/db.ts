const mysql = require("mysql");
import config from "./config";

const connection = mysql.createPool(config.users);

export default connection;
