const bcrypt = require('bcryptjs')
const saltRounds = 10;
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const Record = require('../record')
const User = require('../user')
const db = require('../../config/mongoose')
const SEED_USER = {
  name: 'root',
  email: 'root@example.com',
  password: '12345678'
}
const records = require('./records.json')

db.once('open', () => {
  // return User.create({
  //   name: SEED_USER.name,
  //   email: SEED_USER.email,
  //   password: bcrypt.hashSync(SEED_USER.password, saltRounds)
  // })
  // .then((user)=> {
  //   const userId = user._id
  // })
})