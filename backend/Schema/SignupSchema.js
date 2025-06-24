const { Schema } = require('mongoose')

const signUpSchema = new Schema({
  username: {
    type: String,
    required: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String, 
    required: true,
    minlength: 6
  }
});

module.exports = signUpSchema
