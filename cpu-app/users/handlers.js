exports.create = create
exports.read = read;

function create(request, reply) {
  request.server.methods.users.create(request.payload, saved);

  function saved(err, user){
    if (err)
      return reply(err);

    reply(user);
  }
}

function read(request, reply) {
  request.server.metods.users.find(request.params.id, found);
  
  function found(err, user) {
    if (err || !user)
      return reply(Boom.notFound());
    
    reply(user);
  }
}
