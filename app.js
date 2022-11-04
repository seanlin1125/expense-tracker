const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const PORT = 3000
const routes = require('./routes')

app.engine('.hbs', exphbs.engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './views');

app.use(routes)

app.listen(PORT, ()=> {
  console.log(`Express is listening on localhost:${PORT}`)
})