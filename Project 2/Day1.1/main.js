const http = require("http");
const mod1 = require('./module1');

http.createServer((req, res) => {

    res.setHeader("Access-Control-Allow-Origin", "*");
    const MyResponse = JSON.stringify(mod1.list);
    res.end(MyResponse);
}).listen(5600);
console.log(mod1.list);