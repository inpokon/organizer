const express = require('express');
const passport = require('passport');  // на эти страницы можно будет попасть только аутентифицированный пользователь
const controller = require('../controllers/analytics');  // будем управлять при помощи контроллеров
const router = express.Router(); // и отправим их в нужные роуты

router.get('/overview', passport.authenticate("jwt", {session: false}), controller.overview);
router.get('/analytics', passport.authenticate('jwt', {session: false}), controller.analytics);

module.exports = router;