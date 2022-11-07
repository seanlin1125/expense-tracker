const express = require('express')
const router = express.Router()

const Record = require('../../models/record')

// 渲染新增頁
router.get('/new', (req, res) => {
  res.render('new')
})
// 新增項目
router.post('/', (req, res) => {
  // const { name, date, category, amount } = req.body
  // const userId = req.user._id
  // req.body.userId = userId
  Record.create(req.body)
    .then(() => res.redirect('/'))
    .catch((err) => console.error(err))
})
// 渲染修改頁
router.get('/:id/edit', (req, res) => {
  const { name, date, category, amount } = req.body
  _id = req.params._id
  Record.findOne({ _id })
    .lean()
    .then((record) => res.render('edit', {
      name,
      date,
      category,
      amount
    }))
    .catch((err) => console.error(err))
})
// 修改項目
router.put('/:id/edit', (req, res) => {

})


module.exports = router