const express = require('express');
const passport = require('passport'); // на эти страницы можно будет попасть только аутентифицированный пользователь
const controller = require('../controllers/order'); // будем управлять при помощи контроллеров
const router = express.Router(); // и отправим их в нужные роуты

router.get('/', passport.authenticate('jwt', {session: false}), controller.getAll);
router.post('/', passport.authenticate('jwt', {session: false}), controller.create);

module.exports = router;