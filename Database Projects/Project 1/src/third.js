const Promise = require('bluebird');
const mysql = require('mysql');

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let readByQuery = async() => {
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "nodejs",
    });
    await connection.connectAsync();

    let sql = "select * from day1 where id=2";
    let results = await connection.queryAsync(sql);
    connection.end();
    console.log(results);
    return results;
};
readByQuery();