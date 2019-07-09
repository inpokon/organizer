const express = require('express');
const passport = require('passport'); // на эти страницы можно будет попасть только аутентифицированный пользователь
const controller = require('../controllers/position'); // будем управлять при помощи контроллеров
const router = express.Router(); // и отправим их в нужные роуты

router.get('/:categoryId', passport.authenticate('jwt', {session: false}), controller.getByCategoryId);
router.post('/', passport.authenticate('jwt', {session: false}), controller.create);
router.patch('/:id', passport.authenticate('jwt', {session: false}), controller.update);
router.delete('/:id', passport.authenticate('jwt', {session: false}), controller.remove);

module.exports = router;