const IRC = require('..');

const server = IRC.createServer();

server.listen(10000, '0.0.0.0', () => {
    console.log('Server is listening on 0.0.0.0:10000');
  });
