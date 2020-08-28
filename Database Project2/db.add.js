const Promise = require('bluebird');
const mysql = require('mysql');

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let config = require('./config');

let addRecord = async() => {
        const connection = mysql.createConnection(config.db_config);
        await connection.connectAsync();

        let sql = "insert into day1(username,email,phone)values(?,?,?)";
        await connection.queryAsync(sql, [
            "siddhi",
            "sid@gmail.com",
            789456,
        ]);
        await connection.endAsync();
    }
    //addRecord();

let addRecordWithParam = async(username, email, phone) => {
        const connection = mysql.createConnection(config.db_config);
        await connection.connectAsync();

        let sql = "insert into day1(username,email,phone)values(?,?,?)";
        await connection.queryAsync(sql, [username, email, phone]);
        await connection.endAsync();
    }
    //addRecordWithParam("rutuja", "rutu@gmail.com", 456123);

let addRecordUsingJsonParam = async(user) => {
    const connection = mysql.createConnection(config.db_config);
    await connection.connectAsync();

    let sql = "insert into day1(username,email,phone)values(?,?,?)";
    await connection.queryAsync(sql, [
        user.username,
        user.email,
        user.phone,
    ]);
    await connection.endAsync();
}
addRecordUsingJsonParam({
    username: "tamanna",
    email: "tammu@gmail.com",
    phone: 987456,
});