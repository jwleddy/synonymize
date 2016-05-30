$(document).ready(function() {
  // Establish socket.io connection
  var socket = io.connect();

  // Any keyup event within textarea sends data to server
  $('#input-field').keyup(function(event) {
    event.stopPropagation();
    socket.emit('send to server', $('#input-field').val());
  });
  
  // Shift key always sends data to server
  $(document).keyup(function(event) {
    if (event.which === 16) {
      socket.emit('send to server', $('#input-field').val());
    }
  });

  // Display div populated with synonymized text
  socket.on('display to client', function (data) {
    $('#display').text(data);
  });
});
