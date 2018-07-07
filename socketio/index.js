var io = null;
exports.io = function(server) {
  io = require('socket.io')(server);

  io.on('connection', function(socket) {
    console.log("connected");
    socket.on('hello', function() {
      console.log('received "hello"')
      socket.emit('hello', 'hello')
    })
  })
  
  return io;
}

exports.sendVibration = function(id) {
  io.sockets.emit('vibration', {'id': id});  
}