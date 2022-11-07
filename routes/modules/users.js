const express = require('express')
const router = express.Router()
const User = require('../../models/user')
const passport = require('passport')

router.get('/login', (req, res) => {
  res.render('login')
})
router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/users/login'
}))

router.get('/register', (req, res) => {
  res.render('register')
})
router.post('/register', (req, res) => {
  const { name, email, password, confirmPassword } = req.body
  const errors = []
  if (!name || !email || !password || !confirmPassword) {
    errors.push({ message: 'All fields are required!' })
  }
  if (password !== confirmPassword) {
    errors.push({ message: 'Passwords do not match' })
  }
  if (errors.length) {
    return res.render('register', {
      errors,
      name,
      email,
      password,
      confirmPassword
    })
  }
  User.findOne({ email })
    .then((user) => {
      if (user) {
        errors.push({ message: 'User already exists!' })
        return res.render('register', {
          errors,
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

router.get('/logout', (req, res, next) => {
  req.logout(() => {
    return next()
  })
  req.flash('success_msg', `You've been successfully logged out!`)
  res.redirect('/users/login')
})

module.exports = router