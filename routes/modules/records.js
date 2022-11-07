const express = require('express')
const router = express.Router()

const Record = require('../../models/record')

router.get('/new', (req, res) => {
  res.render('new')
})
router.post('/', (req, res) => {
  // const { name, date, category, amount } = req.body
  // const userId = req.user._id
  // req.body.userId = userId
  Record.create(req.body)
    .then(() => res.redirect('/'))
    .catch((err) => console.error(err))
})

module.exports = router