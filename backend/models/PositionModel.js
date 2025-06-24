const { model } = require('mongoose')
const { positionSchema } = require('../Schema/PositionSchema')

const Position = new model('Position', positionSchema)

module.exports = Position