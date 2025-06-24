const { model } = require('mongoose')
const { holdingsSchema } = require('../Schema/HoldingSchema')

const Holding = new model('Holding', holdingsSchema)

module.exports = Holding