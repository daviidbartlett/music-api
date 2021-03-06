const { NODE_ENV = 'development', DB_USER, DB_PASSWORD } = process.env;

const baseConfig = {
  client: 'pg',
  seeds: { directory: './db/seeds' },
  migrations: { directory: './db/migrations' },
};
console.log(DB_USER);
const customConfig = {
  test: {
    connection: {
      database: 'music_test',
      user: DB_USER,
      password: DB_PASSWORD,
    },
  },
  development: {
    connection: {
      host: 'localhost',
      database: 'music',
      user: DB_USER,
      password: DB_PASSWORD,
    },
  },
};

const log = console.log;
console.log = (...args) => {
  if (!/FsMigrations/.test(args[0])) log(...args);
};

module.exports = { ...baseConfig, ...customConfig[NODE_ENV] };
