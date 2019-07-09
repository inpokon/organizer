/* Для того что бы запустить приложение на серверной версии.
Установите mongodb на ваш сервер https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/
После этого выполнить следующие команды в терминале
- export NODE_ENV=production
- export JWT=jwt-prod
- export MONGO_URI=mongodb://localhost/Название вашего проекта */
module.exports = {
    mongoURI: process.env.MONGO_URI,
    jwt: process.env.JWT
};