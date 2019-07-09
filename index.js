/* Все начинается от сюда */
const app = require('./app'); // подключаем главный модуль
const port = process.env.PORT || 5000; //  все, что находится в переменной окружения PORT, или 5000, если там ничего нет.

/* Метод app.listen () возвращает объект http.Server
*  и (для HTTP) является вспомогательным методом */
app.listen(port, () => console.log(`Server has been started on ${port}`));