const { server } = require('./src/app');

server.listen().then(({ url }) => {
  console.log(`Listening on ${url}`);
});
