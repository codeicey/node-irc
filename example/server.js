const IRC = require('..');

const server = IRC.createServer();

server.listen(10000);

console.log("Server is listening at port 10000");
