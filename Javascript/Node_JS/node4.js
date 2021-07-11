//Making a server and run a html on it
const http = require('http');
const fs = require('fs');

const fileContent = fs.readFileSync('flexbox2.html');

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-type':'text/html'});
    res.end(fileContent);
})

//Here we mention 80 because it is the default port, we don't need to mention the port number explicitly
server.listen(80, '127.0.0.1', ()=>{
    console.log('Listen on port 80');
})

