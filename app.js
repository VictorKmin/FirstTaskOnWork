const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
// const bodyParser = require("body-parser");
const expBars = require("express-handlebars");
// const session = require("express-session");


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const saveRouter = require('./routes/save');

const app = express();

// view engine setup
app.use(express.static(path.join(__dirname, 'public', 'views')));

app.engine('.hbs', expBars({
    extname: '.hbs',
    defaultLayout: path.join(__dirname, 'public', 'layouts' ,'main.hbs')
}));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'public', 'views'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/save', saveRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});


app.listen(3000, ()=> {
    console.log('All right')
});


module.exports = app;
