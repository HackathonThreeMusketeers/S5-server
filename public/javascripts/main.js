var socket = io();

socket.on('connect', function() {
  console.log("connected");
});

socket.on('disconnect', function(){
  console.log('user disconnected');
});

socket.on('hello', function(){
  console.log('received hello');
});

var buttonVibration = document.querySelector("#hello");
buttonVibration.addEventListener('click', function() {
  console.log("clicked helloButton");
  socket.emit('hello', 'hello');
});
