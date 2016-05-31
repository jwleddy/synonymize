$(document).ready(function() {

  // Bundles input (#input-field) and output (#display) in a hash.
  // Input is a string, output is an array of arrays of hashes.
  function bundle() {
    var matrix = [];
    var input = $('#input-field').val();
    $('#display span').each(function(i) {
      var m = $(this).attr('id').split('-');
      var line = m[0];
      var word = m[1];
      matrix[line] = matrix[line] || [];
      var combinedHash = {
        text: $(this).text(),
        sticky: $(this).hasClass('sticky')
      }
      // The point of this is to be able to identify input
      // & output using the same indices
      matrix[line][word] = combinedHash;
    });
    return { input: input, output: matrix };
  }

  // Establish socket.io connection
  var socket = io.connect();

  // Any keyup event within textarea sends data to server
  $('#input-field').keyup(function(event) {
    event.stopPropagation();
    socket.emit('send to server', bundle());
  });

  // Shift key always sends data to server
  $(document).keyup(function(event) {
    if (event.which === 16) {
      socket.emit('send to server', bundle());
    }
  });

  // Display div populated with synonymized text
  socket.on('display to client', function(data) {
    $('#display').html(data.replace(/\n/g,'<br \>'));
  });

  // Click on a span to make it sticky
  $(document).on('click','span.sticky-toggleable',function() {
    $(this).toggleClass('sticky');
  });

});
