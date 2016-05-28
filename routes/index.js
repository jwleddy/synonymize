var express = require('express');
var router = express.Router();
var moby = require('moby');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', searchResult: moby.search('mad') });
});

module.exports = router;
