const { model } = require('mongoose')
const {orderSchema} = require('../Schema/OrderSchema')

const Order = new model('Order', orderSchema)

module.exports = Order