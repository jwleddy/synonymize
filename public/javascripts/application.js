$(document).ready(function() {

  // Establish socket.io connection
  var socket = io.connect();

  // Space key or punctuation keys trigger socket.emit to server
  $('#input-field').keyup(function(event) {
    if (event.which == 32 ||
        event.which == 16 ||
        event.which == 186 ||
        event.which == 188 ||
        event.which == 189 ||
        event.which == 190) {
      socket.emit('send to server', $('#input-field').val());
    }
  });

  // Display div populated with synonymized text
  socket.on('display to client', function (data) {
    $('#display').text(data);
  });
});
