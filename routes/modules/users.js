const express = require('express')
const router = express.Router()
const User = require('../../models/user')

router.get('/login', (req, res) => {
  res.render('login')
})
router.post('/login', (req, res) => {

})
router.get('/register', (req, res) => {
  res.render('register')
})
router.post('/register', (req, res) => {
  const { name, email, password, confirmPassword } = req.body
  if (!name || !email || !password || !confirmPassword) {
    console.log('All fields are required!');
  }
  if (password !== confirmPassword) {
    console.log('Passwords do not match');
  }
  User.findOne({ email })
    .then((user) => {
      if (user) {
        console.log('User already exists!');
        return res.render('register', {
          name,
          email,
          password,
          confirmPassword
        })
      }
      return User.create(req.body)
        .then(() => {
          res.redirect('/users/login')
        })
        .catch((err) => console.error(err))
    })
    .catch((err) => console.error(err))
})
router.get('/logout', (req, res) => {

})

module.exports = router