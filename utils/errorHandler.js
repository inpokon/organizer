/* Модуль промежуточного обработчика для обработки ошибок */
module.exports = (res, error) => {
  res.status(500).json({  // формат ответа JSON
      success: false,
      message: error.message ? error.message : error
  })
};