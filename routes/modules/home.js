const express = require('express')
const Record = require('../../models/record')
const Category = require('../../models/category')
const router = express.Router()

router.get('/', (req, res) => {
  const userId = req.user._id
  const categoriesFilter = []
  const filteredCategoryId = req.query.filteredCategoryId
  let totalAmount = 0
  Category.find()
    .lean()
    .sort({ _id: 'asc' })
    .then((categories) => {
      categoriesFilter.push(...categories)
    })
    .then(() => {
      const categoryAlreadySelected = categoriesFilter.some((category) => { return category._id.toString() === filteredCategoryId })
      return Record.find(categoryAlreadySelected ? { userId, categoryId: filteredCategoryId } : { userId })
        .populate('categoryId')
        .lean()
        .then((records) => {
          records.forEach((record) => {
            totalAmount += record.amount
          })
          return res.render('index', { records, categoriesFilter, totalAmount })
        })
        .catch((err) => console.error(err))
    })
    .catch((err) => console.error(err))
})

module.exports = router