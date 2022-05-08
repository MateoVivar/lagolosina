require("./mysql/connection");
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var session = require('express-session');

var inicioRouter = require('./routes/inicio');
var menuRouter = require('./routes/menu');
var detallesRouter = require('./routes/detalles');
var registroRouter = require('./routes/registro');
var postgresRouter = require('./routes/postgres');
var usuariosRouter = require('./routes/usuarios');
var loginRouter = require('./routes/login');
const { redirect } = require("express/lib/response");
var app = express();

var sessionConfig = {
  secret: 'hola123',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    maxAge: 1000 * 60 * 30 ,
  }
}


app.use(cookieParser());



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(session(sessionConfig));

app.use('/inicio', inicioRouter)
app.use('/menu', menuRouter)
app.use('/detalles', detallesRouter)
app.use('/registro', registroRouter)
app.use('/postgres', postgresRouter)
app.use('/usuarios', usuariosRouter)
app.use('/login', loginRouter)

// app.use(function(req,res,next){
//   res.locals.currentUser = req.user;
//   // res.locals.error = req.flash("error");
//   // res.locals.success = req.flash("success");
//   console.log(req.user);
//   next();
// });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.redirect('/inicio')
});

module.exports = app;
