const express = require('express')
const Record = require('../../models/record')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
})

module.exports = router