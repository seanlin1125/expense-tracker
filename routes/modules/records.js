const express = require('express')
const router = express.Router()

const Record = require('../../models/record')
const Category = require('../../models/category')
const categories = require('../../models/seeds/categories.json')

// 渲染新增頁
router.get('/new', (req, res) => {
  res.render('new', { categories })
})
// 新增項目
router.post('/', (req, res) => {
  const selectedCategoryName = req.body.category
  Category.findOne({ name: selectedCategoryName })
    .lean()
    .then((category) => {
      const userId = req.user._id
      req.body.userId = userId
      req.body.categoryId = category._id
      return Record.create(req.body)
    })
    .then(() => res.redirect('/'))
    .catch((err) => console.error(err))
})
// 渲染修改頁
router.get('/:id/edit', (req, res) => {
  const userId = req.user._id
  _id = req.params.id
  Category.find()
    .lean()
    .sort({ _id: 'asc' })
    .then((categories) => {
      Record.findOne({ _id, userId })
        .lean()
        .then((record) => {
          categories.forEach((category) => {
            if (category._id.toString() === record.categoryId.toString()) {
              category.selected = true
            }
          })
          res.render('edit', { record, categories })
        })
        .catch((err) => console.error(err))
    })
    .catch((err) => console.error(err))
})
// 修改項目
router.put('/:id', (req, res) => {
  const selectedCategoryId = req.body.category
  Category.findOne({ _id: selectedCategoryId })
    .lean()
    .then((category) => {
      const userId = req.user._id
      req.body.userId = userId
      req.body.categoryId = category._id
      return Record.findOneAndUpdate({ _id, userId }, req.body)
    })
    .then(() => res.redirect('/'))
    .catch((err) => console.error(err))
})
// 刪除項目
router.delete('/:id', (req, res) => {
  const userId = req.user._id
  _id = req.params.id
  return Record.findOneAndDelete({ _id, userId })
    .then(() => res.redirect('/'))
    .catch((err) => console.error(err))
})


module.exports = router