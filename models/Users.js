// var mongoose = require('mongoose');
//
// const userSchema = mongoose.Schema({
//   username: String,
//   email: {
//     type: String,
//     unique: true,
//   },
//   password: String
// })
//
// mongoose.model('User', userSchema)

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


const userSchema = mongoose.Schema({
  username: String,
  email: {
    type: String,
    unique: true,
  },
  password: String
})

userSchema.methods.validPassword = function(password){
  return bcrypt.compareSync(password, this.local.password)
}


mongoose.model('User', userSchema)
