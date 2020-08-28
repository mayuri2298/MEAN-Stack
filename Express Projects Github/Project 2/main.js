const Promise = require('bluebird');
const mysql = require('mysql');

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const express = require('express');

const app = express();
const dbread = require('./db.read');
const dbreadAll = require('./readAll');

const readAll = require('./readAll');
app.get("/", async(req, res) => {
    try {
        const username = req.query.username;
        const email = req.query.email;
        const phone = req.query.phone;

        const connection = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "nodejs"
        });
        await connection.connectAsync();
        let sql = "insert into day1(username,email,phone)values(?,?,?)";
        await connection.queryAsync(sql, [username, email, phone]);
        await connection.endAsync();
        const json = { title: "record added through server" };
        res.json(json);
    } catch (err) {
        const json = { message: "error" };
        res.json(json);
    }

});

app.get("/adduser", async(req, res) => {
    try {
        await dbread.addRecord(req.query);
        const json = { msg: "success" };
        res.json(json);
    } catch (err) {
        const json = { msg: "failure" };
        res.json(json);
    }
})

app.get("/alluser", async(req, res) => {
    try {
        const results = await dbreadAll.readAll();
        res.json(results);
    } catch (err) {
        const json = { msg: "error" };
        res.json(json);
    }
})
app.listen(3000);