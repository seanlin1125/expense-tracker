const express = require('express')
const app = express()
const PORT = 3000
const routes = require('./routes')

app.use(routes)

app.listen(PORT, ()=> {
  console.log(`Express is listening on localhost:${PORT}`)
})