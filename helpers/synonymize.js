// Takes in user input as a string and returns a synonymized string (uses moby)
module.exports = function(data) {
  var synonymized = [];
  var moby = require('moby');
  // Split into lines first
  var splitLines = data.split('\n');
  for (q = 0; q < splitLines.length; q++) {
    // Now split into words
    var splitWords = splitLines[q].split(' ');
    for (i = 0; i < splitWords.length; i++) {
      var results = moby.search(splitWords[i]);
      // If there are any results, choose a random replacement for the string
      if (results.length) {
        var replacement = results[Math.floor(Math.random() * results.length)]
        splitWords[i] = replacement;
      };
      splitWords[i] = splitWords[i].toLowerCase();
    }
    synonymized.push(splitWords.join(' '));
  }
  return synonymized.join('\n');
}
