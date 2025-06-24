const { Schema } = require('mongoose')

const orderSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    qty: {
        type: String,
        required: true
    },
    mode: {
        type: String,
        required: true
    },
})

module.exports = { orderSchema }