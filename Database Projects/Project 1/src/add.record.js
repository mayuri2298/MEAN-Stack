const Promise = require('bluebird');
const mysql = require('mysql');

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const DB_CONFIG = {
    host: "localhost",
    user: "root",
    password: "",
    database: "nodejs",
};

let addRecord = async() => {
    const connection = mysql.createConnection(DB_CONFIG);
    await connection.connectAsync();

    let sql = "INSERT INTO day1(USERNAME,EMAIL,PHONE) VALUES (?,?,?)";
    let operation = await connection.queryAsync(sql, [
        "sujit",
        "sujit@gmail.com",
        456789,
    ]);
    await connection.endAsync();

    return operation;

};

addRecord();