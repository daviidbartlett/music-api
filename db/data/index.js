const { NODE_ENV = 'development' } = process.env;

const data = {
  test: require('./test-data'),
  development: require('./dev-data'),
};

module.exports = data[NODE_ENV];
