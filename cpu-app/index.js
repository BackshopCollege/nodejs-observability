const Hapi = require('hapi');
const server = new Hapi.Server();

const users = require('./users');
const database = require('./database');
const hapiSwagger = require('hapi-swagger');

server.connection({ 
  port: 3000, 
  host: 'localhost' 
});

const plugins = [
  require('inert'),
  require('vision'),
  { register: hapiSwagger, options: { info: { title: 'backshop' }}},
  database,
  users ];

server.register(plugins, (err) => { 
  if (err) throw err 

  console.log('registered');
});

module.exports = server;
