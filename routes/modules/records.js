const express = require('express')
const router = express.Router()

const Record = require('../../models/record')

// 渲染新增頁
router.get('/new', (req, res) => {
  return res.render('new')
})
// 新增項目
router.post('/', (req, res) => {
  // const { name, date, category, amount } = req.body
  // const userId = req.user._id
  // req.body.userId = userId
  return Record.create(req.body)
    .then(() => res.redirect('/'))
    .catch((err) => console.error(err))
})
// 渲染修改頁
router.get('/:id/edit', (req, res) => {
  _id = req.params.id
  return Record.findOne({ _id })
    .lean()
    .then((record) => res.render('edit', { record }))
    .catch((err) => console.error(err))
})
// 修改項目
router.put('/:id/edit', (req, res) => {
  _id = req.params.id
  return Record.findOneAndUpdate({ _id }, req.body)
    .then(() => res.redirect('/'))
    .catch((err) => console.error(err))
})
// 刪除項目
router.delete('/:id', (req, res) => {
  _id = req.params.id
  return Record.findOne({ _id })
    .then((record) => record.remove())
    .then(() => res.redirect('/'))
    .catch((err) => console.error(err))
})


module.exports = router