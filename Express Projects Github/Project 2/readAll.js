const Promise = require('bluebird');
const mysql = require('mysql');

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const config = require('./config');

let readAll = async() => {
    const connection = mysql.createConnection(config.db_config);
    await connection.connectAsync();
    let sql = "select * from day1";
    const result = await connection.queryAsync(sql);
    await connection.endAsync();
    return result;
}
module.exports = { readAll };