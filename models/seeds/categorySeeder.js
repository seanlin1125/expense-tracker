if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const Category = require('../category')
const db = require('../../config/mongoose')

const categories = require('./categories.json')

db.once('open', () => {
  return Category.create(categories)
    .then(() => {
      console.log('categories seeds imported!');
      process.exit()
    })
    .catch((err) => console.error(err))
})