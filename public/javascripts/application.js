$(document).ready(function() {
  var socket = io.connect();
  socket.on('display to client', function (data) {
    $('#display').text(data);
  });
  $('#input-field').keyup(function(event) {
    if (event.which == 32 || event.which == 186 || event.which == 188 || event.which == 189 || event.which == 190) {
      socket.emit('send to server', $('#input-field').val());
    }
  });
});
