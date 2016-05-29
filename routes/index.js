module.exports = function(io) {
  var express = require('express');
  var router = express.Router();
  var moby = require('moby');
  var synonymize = require('../synonymize');

  /* GET home page. */
  router.get('/', function(req, res, next) {
    res.render('index', { title: 'synonymize'});
  });

  io.on('connection', function (socket) {
    socket.on('send to server', function (data) {
    socket.emit('display to client', synonymize(data));
    });
  });

  return router;
}
