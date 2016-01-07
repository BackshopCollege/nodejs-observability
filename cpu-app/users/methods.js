const bcrypt = require('bcrypt');
const random = require('node-uuid');
const Boom = require('boom');
const _ = require('lodash');

exports.create = function(user, callback) {
  const newUser = _.cloneDeep(user);
  delete newUser.password;

  newUser.id = random.v1();
  newUser.hashedPassword = hashPassword(user.password);
  
  this.db.put(newUser.id, newUser, onSave);

  function onSave(err, user) {
    if (err)
      return callback(Boom.badImplementation('internal database error'));

    callback(null, user);
  }
};

function hashPassword(password) {
  const salt = bcrypt.genSaltSync(12);
  return bcrypt.hashSync(password, salt);
}

exports.find = (id, callback) => {
 this.db.get(id, callback);
};
