const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let readAllUser = async() => {
    try {
        console.log("I.AM.ABOUT.TO.READ.DB");


        const connection = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "nodejs",
        });


        await connection.connectAsync();

        console.log("CONNECTION.SUCCESSFUL!!");

        await connection.endAsync();
    } catch (err) {
        console.log(err);
    }
};

readAllUser();