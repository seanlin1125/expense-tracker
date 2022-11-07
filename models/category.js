const mongoose = require('mongoose')
const Schema = mongoose.Schema
const categorySchema = new Schema({
  name: {
    type: String,
    required: true
  }
})

const Category = mongoose.model('Record', categorySchema)

module.exports = Category