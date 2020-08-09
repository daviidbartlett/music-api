const { server } = require('./src/app');
const connection = require('./db/connection');

let serverRunning;

beforeAll(async () => {
  serverRunning = await server.listen();
});

beforeEach(async () => {
  await connection.seed.run();
});

afterAll(async () => {
  await connection.destroy();
  await serverRunning.server.close();
});
