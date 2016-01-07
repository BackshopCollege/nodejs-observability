const routes = require('./routes');
const methods = require('./methods');

exports.register = register;
function register(server, options, next) {

  server.dependency('database');

  const database = server.methods.database;
  const bind = { db: database };

  server.method('users.create', methods.create, { bind: bind });
  server.method('users.find', methods.find, { bind: bind });

  server.route(routes);
  next();
}

exports.register.attributes = {
  name: 'user',
  version: '1.0.0'
};
