const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const passport = require('passport');
const mongoose = require('mongoose');

const authRoutes = require('./routes/auth');
const analyticsRoutes = require('./routes/analytics');
const categoryRoutes = require('./routes/category');
const orderRoutes = require('./routes/order');
const positionRoutes = require('./routes/position');

/* Ключи от mongoURL и JWT */
const keys = require('./config/keys');

/** Этот метод принимает функцию с тремя параметрами,
*  @param объект запроса (req),
*  @param объект ответа (res),
*  @param коллбек next. */
const app = express();

/* открает соединение с базой данных
* выводит в консоль о том, что есть соединение
* иначе выводит ошибку*/
mongoose
    .connect(keys.mongoURI)
    .then(() => console.log('MongoDB connected.'))
    .catch(error => console.log(error));

/* Инициализация Passport */
app.use(passport.initialize());

/* Вызовем модуль passport */
require('./middleware/passport')(passport);

app.use(morgan('dev'));  // при любых запросах morgan автоматически создает журналы.
app.use('/uploads', express.static('uploads')); // Предоставление статических файлов в Express
app.use(bodyParser.urlencoded({extended: true})); // анализирует текст в виде URL-кодированных данных и предоставляет результирующий объект для req.body
app.use(bodyParser.json()); //  анализирует текст как JSON и req.body
app.use(cors()); // налагает специальные ограничения

/* Подключение роутев */
app.use('/api/auth', authRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/position', positionRoutes);


/* NODE_ENV - §§ */
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/dist/client')); // Предоставление статических файлов в Express

    app.get('*', (req, res) => { // получить ответ со страницы index.html
        res.sendFile( // получаем абсолютный путь
            path.resolve(  // Метод path.resolve() превращает последовательность путей или сегментов пути в абсолютный путь.
                __dirname, 'client', 'dist', 'client', 'index.html'  // client/dist/client/index.html
            )
        );
    });
}

module.exports = app; // экспорт главного модуля