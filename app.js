const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const expBars = require("express-handlebars");

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const carRouter = require('./routes/cars');

const postgres = new require('./service/DataBase').getInstance();
postgres.setModels();

const app = express();
//Сетаю аплікушці провертю postgres з значенням екзамепляру класу, зарекваєреного вище
app.set('postgres', postgres);
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
app.use('/user', usersRouter);
app.use('/car', carRouter);

app.use(function (req, res, next) {
    next(createError(404));
});

app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.render('error', {
        error: err
    });
});

app.listen(3000, ()=> {
    console.log('All right')
});

module.exports = app;
