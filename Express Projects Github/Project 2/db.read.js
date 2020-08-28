const Promise = require('bluebird');
const mysql = require('mysql');

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const config = require('./config');

let addRecord = async(user) => {
    const connection = mysql.createConnection(config.db_config);
    await connection.connectAsync();

    let sql = "insert into day1(username,email,phone)values(?,?,?)";
    await connection.queryAsync(sql, [
        user.username,
        user.email,
        user.phone,
    ]);

    await connection.endAsync();
    return;
}
module.exports = { addRecord };