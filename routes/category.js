const express = require('express');
const passport = require('passport'); // на эти страницы можно будет попасть только аутентифицированный пользователь
const upload = require('../middleware/upload'); // получение и изменение изображений
const controller = require('../controllers/category'); // будем управлять при помощи контроллеров
const router = express.Router(); // и отправим их в нужные роуты

router.get('/', passport.authenticate('jwt', {session: false}), controller.getAll);
router.get('/:id', passport.authenticate('jwt', {session: false}), controller.getById);
router.delete('/:id', passport.authenticate('jwt', {session: false}), controller.remove);
router.post('/', passport.authenticate('jwt', {session: false}), upload.single('image'), controller.create);
router.patch('/:id', passport.authenticate('jwt', {session: false}), upload.single('image'), controller.update);

module.exports = router;