const moment = require('moment');
const Order = require('../models/Order'); // Подключим модель Order
const errorHandler = require('../utils/errorHandler'); // Подключим наш оброботчик ошибок

/** Асинхронная функция для анализа ордеров
 *  если статус 200 то передает уже в JSON формате нужный материал для вывода */
module.exports.overview = async function (req, res) {
    try {
        /** Находит и сортирует все ордера
         * @type {Array} */
        const allOrders = await Order.find({user: req.user.id}).sort({data: 1});
        /** Создает объект ордеров с ключем даты ордера
         * @type {Object} */
        const ordersMap = getOrdersMap(allOrders);
        /** Список заказов вчера
         * @type {Array} */
        const yesterdayOrders = ordersMap[moment().add(-1, 'd').format('DD.MM.YYYY')] || [];
        /** Количество заказов вчера
         * @type {number} */
        const yesterdayOrdersNumber =  yesterdayOrders.length;
        /** Количество заказов
         * @type {number} */
        const totalOrdersNumber = allOrders.length;
        /** Количество дней всего
         * @type {number} */
        const daysNumber = Object.keys(ordersMap).length;
        /** Заказов в день
         * @type {string} */
        const ordersPerDay = (totalOrdersNumber / daysNumber).toFixed(0);
        /** Процент для кол-ва заказов
         * @type {string} */
        const ordersPercent = (((yesterdayOrdersNumber / ordersPerDay) - 1) * 100).toFixed(2);
        /** Общая выручка
         * @type {number} */
        const totalGain = calculatePrice(allOrders);
        /** Выручка в день
         * @type {number} */
        const gainPerDay = totalGain / daysNumber;
        /** Выручка за вчера
         * @type {number} */
        const yesterdayGain = calculatePrice(yesterdayOrders);
        /** Процент выручки
         * @type {string} */
        const gainPercent = (((yesterdayGain / gainPerDay) - 1) * 100).toFixed(2);
        /** Сравнение выручки
         * @type {string} */
        const compareGain = (yesterdayGain - gainPerDay).toFixed(2);
        /** Сравнение кол-во заказов
         * @type {string} */
        const compareNumber = (yesterdayOrdersNumber - ordersPerDay).toFixed(2);

        res.status(200).json({
            gain: {
                percent: Math.abs(+gainPercent),
                compare: Math.abs(+compareGain),
                yesterday: +yesterdayGain,
                isHigher: gainPercent > 0
            },
            orders: {
                percent: Math.abs(+ordersPercent),
                compare: Math.abs(+compareNumber),
                yesterday: +yesterdayOrdersNumber,
                isHigher: ordersPercent > 0
            }
        });
        
    } catch (e) {
        errorHandler(res, e)
    }
};

/** Асинхронная функция для аналитики ордеров
 *  если статус 200 то передает уже в JSON формате нужный материал для вывода */
module.exports.analytics = async function (req, res) {
    try {
        /** Находит все ордера и сортирует их
         * @type {Array} */
        const allOrders = await Order.find({user: req.user.id}).sort({date: 1});
        /** Создает объект ордеров с ключем даты ордера
         * @type {Object} */
        const ordersMap = getOrdersMap(allOrders);
        /** Находит средний чек
         * @type {number} */
        const average = +(calculatePrice(allOrders) / Object.keys(ordersMap).length).toFixed(2);
        /** Создает массив объектов
         * @type {Array} */
        const chart = Object.keys(ordersMap).map(label => {
            // label == 04.06.2019
            const gain = calculatePrice();
            const order = ordersMap[label].length;

            return {label, gain, order}
        });

        res.status(200).json({average, chart});
    } catch (e) {
        errorHandler(res, e);
    }
};

/** Возращает объект ордеров с ключем даты ордера
 * @param orders {Array}
 * @return {Object} */
function getOrdersMap(orders = []) {
    const daysOrder = {};
    orders.forEach(order => {
        const date = moment(order.date).format('DD.MM.YYYY');
        if (date === moment().format('DD.MM.YYYY')) {
            return
        }
        if (!daysOrder[date]) {
            daysOrder[date] = []
        }
        daysOrder[date].push(order);
    });

    return daysOrder;
}

/** Получаем сумму определенного ордера
 * @param orders {Array}  [ [ {}, {} ], [ {}, {} ] ]
 * @return {number} */
function calculatePrice(orders = []) {
    return orders.reduce((total, order) => {
        const orderPrice = order.list.reduce((orderTotal, item) => {
            return orderTotal += item.cost * item.quantity;
        }, 0);
        return total += orderPrice;
    }, 0);
}