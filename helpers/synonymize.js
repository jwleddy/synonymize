// Takes in user input as a string and returns a synonymized string (uses moby)
module.exports = function(data) {
  var moby = require('moby');
  var splitData = data.split(' ');
  for (i = 0; i < splitData.length; i++) {
    var results = moby.search(splitData[i]);
    // If there are any results, choose a random replacement for the string
    if (results.length) {
      var replacement = results[Math.floor(Math.random() * results.length)]
      splitData[i] = replacement;
    };
    splitData[i] = splitData[i].toLowerCase();
  }
  return splitData.join(' ');
}
