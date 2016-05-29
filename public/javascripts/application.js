$(document).ready(function() {
  // Establish socket.io connection
  var socket = io.connect();

  // Space key or punctuation keys trigger socket.emit to server
  $('#input-field').keyup(function(event) {
    socket.emit('send to server', $('#input-field').val());
  });

  // Display div populated with synonymized text
  socket.on('display to client', function (data) {
    $('#display').text(data);
  });
});
