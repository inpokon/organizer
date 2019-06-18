[<- Назад](../README.md)
# Структура серверной части

app.js - Главный модуль сервера где подключаются все остальные модули.

 - [express](https://expressjs.com/ru/) - веб-фреймворк для приложений Node.js
 - [body-parser](https://www.npmjs.com/package/body-parser) - это кусок экспресс-промежуточного программного обеспечения, который        читает ввод формы и сохраняет его как javascript         доступ к объекту через req.body       "body-parser" должен быть установлен (через npm install --save body-parser). Для получения дополнительной информации см.: https://github.com/expressjs/body-parser
 - [cors](https://www.npmjs.com/package/cors) - Спецификация CORS налагает специальные ограничения на запросы
 - [morgan](https://www.npmjs.com/package/morgan) - используется для регистрации деталей запроса
 - path - предоставляет утилиты для работы с путями к файлам и директориям.
 - [passport](http://www.passportjs.org/) - Аутентификация в Node.js https://medium.com/devschacht/node-hero-chapter-8-27b74c33a5ce
 - [mongoose](https://mongoosejs.com/) - элегантное моделирование объектов mongodb для node.js 
 
# Controllers
- analytics.js
    - [moment](https://momentjs.com/) - для работы с датой
- auth.js
    - [bcrypt](https://www.npmjs.com/package/bcrypt) - Библиотека, которая поможет вам хэшировать пароли
    - [jwt](https://jwt.io/) - JSON Web Tokens - это открытый промышленный стандарт RFC 7519 для безопасного представления заявок между двумя сторонами.
    