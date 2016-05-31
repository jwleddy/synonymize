// Takes in user input as a string and returns a synonymized string (uses moby)
// This all needs refactoring quite badly
module.exports = function(data) {
  var input = data['input'];
  var output = data['output'];
  // console.log(data['output']);
  var synonymized = [];
  var moby = require('moby');
  var natural = require('natural');
  // Split into lines first
  var splitLines = input.split('\n');
  for (q = 0; q < splitLines.length; q++) {
    // Now split into words
    var splitWords = splitLines[q].split(' ');
    for (i = 0; i < splitWords.length; i++) {
      if (output.length > 0 && output[q] && output[q][i] && output[q][i]['sticky'] == true) {
        splitWords[i] = '<span id="' + q + '-' + i + '" class="sticky sticky-toggleable" contenteditable>' + data['output'][q][i]['text'].toLowerCase() + '</span>';
      } else {
        var results = moby.search(splitWords[i]);
        if (!results.length) {
          var stemmed = natural.PorterStemmer.stem(splitWords[i]);
          results = moby.search(stemmed);
        }
        // If there are any results, choose a random replacement for the string
        if (results.length) {
          var replacement = results[Math.floor(Math.random() * results.length)]
          splitWords[i] = replacement;
          splitWords[i] = '<span id="' + q + '-' + i + '" class="sticky-toggleable" contenteditable>' + splitWords[i].toLowerCase() + '</span>';
        } else {
          splitWords[i] = '<span id="' + q + '-' + i + '" class="perma-sticky" contenteditable>' + splitWords[i].toLowerCase() + '</span>';
        }
      }
    }
    synonymized.push(splitWords.join(' '));
  }
  return synonymized.join('\n');
}
