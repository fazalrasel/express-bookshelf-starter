var express = require('express');
var app = express();
var pkg = require('./package.json');

// Middleware
var bodyParser = require('body-parser');
var compression = require('compression');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//app.use(compression()); // todo: compression is not working now. Work on later.

// Controllers



app.get('/', function (req, res) {
  res.send({version : pkg.version});
});


// catch 404 and forward to error handler
app.use(function (req, res) {
  res.status(404);
  res.json({
    message: 'Not Found',
    status: 404
  })
});


// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  console.log(err);
  res.status(err.status || 500);
  res.json('error', {
    message: err.message,
    error: {}
  });
});


app.listen(3000, function () {
  console.log('App is running on port 3000');
});