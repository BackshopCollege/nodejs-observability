
var database = { };

module.exports.register = function(server, options, next) {
  server.method('database.put', put);
  server.method('database.get', get);
  next();
};

module.exports.register.attributes = {
  name: 'database',
  version: '1.0.0'
};

function put(id, value, callback) {
  setImmediate(() => { 
    database[id] = value;
    return callback(null, value);
  });
}

function get(id, callback) {
  setImmediate(function(){
    callback(null, database[id]);
  });
}

