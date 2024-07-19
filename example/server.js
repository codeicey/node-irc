const IRC = require('..');

const server = IRC.createServer({host:"0.0.0.0"});

const port = process.env.PORT || 10000;
const host = process.env.HOST || '0.0.0.0';

server.listen(port, host, () => {
    console.log('Server is listening on 0.0.0.0:10000');
  });

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
