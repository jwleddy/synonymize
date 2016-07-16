var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var handlebars = require('express-handlebars');
var bodyParser = require('body-parser');
var app = express();

/*
 * Socket.io
 */
var socket_io = require( "socket.io" );
var io = socket_io();
app.io = io;

var routes = require('./routes/index')(io);

// view engine setup
app.engine('handlebars', handlebars({layoutsDir: path.join(__dirname, 'server/views/layouts'), defaultLayout: 'main'}));
app.set('views', './server/views');
app.set('view engine', 'handlebars');

// static assets
app.use(express.static(path.resolve(__dirname, './dist')));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
// if (app.get('env') === 'development') {
//   app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//       message: err.message,
//       error: err
//     });
//   });
// }
//
// // production error handler
// // no stacktraces leaked to user
// app.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   res.render('error', {
//     message: err.message,
//     error: {}
//   });
// });


module.exports = app;
