const { model } = require('mongoose')
const signUpSchema  = require('../Schema/SignupSchema')

const User = new model('User', signUpSchema)

module.exports = User