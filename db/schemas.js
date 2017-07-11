const mongoose = require('mongoose')
const Schema = mongoose.Schema

const listSchema = new Schema({
  user: String,
  title: String,
  tasks: [{ body: String, completed: Boolean }],
})

const userSchema = new Schema({
  userName: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  lists: [listSchema],
})

const List = mongoose.model('List', listSchema)
const User = mongoose.model('User', userSchema)

module.exports.List = List
module.exports.User = User
