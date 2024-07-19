const IRC = require('..');

const server = IRC.createServer({host:"3.75.158.163"});

const port = process.env.PORT || 10000;
const host = process.env.HOST || '3.75.158.163';

server.listen(port, host, () => {
    console.log('Server is listening on 3.75.158.163:10000');
  });

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
