const handlers = require('./handlers');
const Joi = require('joi');

const create = {
  method: 'POST',
  path: '/users',
  handler: handlers.create,
  config: {
    tags: ['api'],
    validate: {
      payload: {
        name: Joi.string().required(),
        password: Joi.string().required()
      } 
    }
  }
};

const read = {
  method: 'GET',
  path: '/users/{id}',
  handler: handlers.read,
  config: {
    tags: ['api']
  }
};

module.exports = [
  create,
  read
];
