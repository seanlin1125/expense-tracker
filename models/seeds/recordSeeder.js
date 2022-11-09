const bcrypt = require('bcryptjs')
const saltRounds = 10;
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const Record = require('../record')
const Category = require('../../models/category')
const User = require('../user')
const db = require('../../config/mongoose')
const SEED_USER = [
  {
    name: 'root',
    email: 'root@example.com',
    password: '12345678'
  }
]
const records = require('./records.json')

db.once('open', () => {
  Category.find()
    .lean()
    .then((categories) => {
      records.forEach((record) => {
        record.categoryId = categories.find((category) => category.name === record.categoryId)._id
      })
    })
    .then(() => {
      Promise.all(SEED_USER.map((user) => {
        const { name, email, password } = user
        return User.create({
          name,
          email,
          password: bcrypt.hashSync(password, saltRounds)
        })
          .then((user) => {
            records.forEach((record) => record.userId = user._id)
            return Record.create(records) //不確定為何這裡沒有return會失敗?
          })
          .catch((err) => console.error(err))
      })
      )
        .then(() => {
          console.log('records seeds imported!')
          process.exit()
        })
        .catch((err) => console.error(err))
    })
    .catch((err) => console.error(err))
})