const Promise = require('bluebird');
const mysql = require('mysql');

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let config = require('./config');

let readAllUser = async() => {
    let connection = mysql.createConnection(config.db_config);
    await connection.connectAsync();

    let sql = "select * from day1";
    let result = await connection.queryAsync(sql);
    console.log(result);
    await connection.endAsync();
    return result;
};
//readAllUser();
let readUserByQuery = async() => {
    const connection = mysql.createConnection(config.db_config);
    await connection.connectAsync();

    let sql = "select * from day1 where id=? or username=?";
    let result = await connection.queryAsync(sql, [1, "sujit"]);
    console.log(result);
    await connection.endAsync();
    return result;
};
//readUserByQuery();

let readUserByParam = async(id, username) => {
        const connection = mysql.createConnection(config.db_config);
        await connection.connectAsync();

        let sql = "select * from day1 where id=? or username=?";
        let result = await connection.queryAsync(sql, [id, username]);
        console.log(result);
        await connection.endAsync();
        return result;
    }
    //readUserByParam(3, "dhanashree");

let readUserByJsonParam = async(user) => {
    const connection = mysql.createConnection(config.db_config);
    await connection.connectAsync();

    let sql = "select * from day1 where id=? or username=?";
    let result = await connection.queryAsync(sql, [user.id, user.username]);
    console.log(result);
    await connection.endAsync();
    return result;
}
readUserByJsonParam({
    id: 1,
    username: "tejaswini",
});