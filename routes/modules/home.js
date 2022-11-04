const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('project init')
})

module.exports = router