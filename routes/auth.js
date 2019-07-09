/* Должен был быть главным роутем, но так как мы отказываемся от роута '/'
* то два основных роута будут /login и /register*/

const express = require('express');
const controller = require('../controllers/auth');  // будем управлять при помощи контроллеров
const router = express.Router(); // и отправим их в нужные роуты

// localhost:5000/api/auth/login
router.post('/login', controller.login);
router.post('/register', controller.register);

module.exports = router;