/*  Выбор ключей от переменная окружения NODE_ENV  */
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./keys.prod')
} else {
  /* Для того что бы запустить приложение на локальной версии. Необходимо создать файл ./keys.dev.js
  *  mongoURI: Необходимо создать аккаунт на https://www.mongodb.com/  и получить ключ типа:
                - 'mongodb+srv://Ваш аккаунт:Ваш пароль@Ваша ссылка.mongodb.net/Название вашей базы данных',
  *  jwt: 'dev-jwt'  */
  module.exports = require('./keys.dev')
}