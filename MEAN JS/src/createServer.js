const http = require('http');
http.createServer((request, response) => {
    //response.end("hello");
    let json = {
        title: 'cdac',
        center: 'mumbai'
    }
    response.end(JSON.stringify(json));
}).listen(5500);