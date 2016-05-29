module.exports = function(data) {
  var moby = require('moby');
  var splitData = data.split(' ');
  for (i = 0; i < splitData.length; i++) {
    var results = moby.search(splitData[i]);
    if (results.length) {
      var replacement = results[Math.floor(Math.random()*results.length)]
      splitData[i] = replacement;
    };
  }
  return splitData.join(' ');
}
