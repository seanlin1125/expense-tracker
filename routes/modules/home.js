const express = require('express')
const Record = require('../../models/record')
const Category = require('../../models/category')
const router = express.Router()

router.get('/', (req, res) => {
  const userId = req.user._id
  const categoriesFilter = []
  const filteredCategoryId = req.query.filteredCategoryId
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
          categoriesFilter.forEach((category) => {
            if (category._id.toString() === filteredCategoryId) {
              category.selected = true
            }
          })
          //計算總金額
          const initialValue = 0
          const totalAmount = records.reduce((previousValue, record) => {
            return previousValue += record.amount
          }, initialValue)
          return res.render('index', { records, categories: categoriesFilter, totalAmount })
        })
        .catch((err) => console.error(err))
    })
    .catch((err) => console.error(err))
})

module.exports = router