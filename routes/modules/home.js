const express = require('express')
const Record = require('../../models/record')
const Category = require('../../models/category')
const router = express.Router()

router.get('/', (req, res) => {
  const userId = req.user._id
  Record.find({ userId })
    .lean()
    .then((records) => res.render('index', { records }))
  // Record.find()
  //   .lean()
  //   .then((records) => {
  //     res.render('index', { records })
  //     return Category.find({ _id: records.categoryId })
  //   })
  //   .then((categories) => res.render('index', { categories }))
  //   .catch((err) => console.error(err))
})

module.exports = router