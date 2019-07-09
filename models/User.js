/* Модель Пользователя */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * @const {userSchema} Новый объект Schema */
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('users', userSchema);