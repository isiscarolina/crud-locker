const express = require('express');
const exhbs = require('express-handlebars');
const morgan = require('morgan'); 
const path = require('path');

const { database } = require('./keys');

const app = express();

//configurações
app.set('port', process.env.PORT || 5000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exhbs({
    defaultLayout: 'main', 
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partial'),
    extname: '.hbs'
}));

app.set('view engine', '.hbs');

//middlewars
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));


//routas
app.use('/locker', require('./route/crud'));

//public
app.use(express.static(path.join(__dirname, 'public')));


// iniciando servidor

app.listen (app.get('port'), () => {
    console.log('server on port: ', app.get('port'));
});