// Router will take io parameter from app.io in app.js
module.exports = function (io) {
  var express = require('express');
  var router = express.Router();
  var synonymize = require('../helpers/synonymize');

  /* GET home page. */
  router.get('/', function (req, res, next) {
    res.render('index', { title: 'synonymize'});
  });

  /* socket.io */
  io.on('connection', function (socket) {
    socket.on('send to server', function (data) {
      socket.emit('display to client', synonymize(data));
    });
  });

  return router;
}
