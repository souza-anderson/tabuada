const express = require('express')
const path = require('path')
const indexRouter = require('./routes/index')
const tabuadaRouter = require('./routes/tabuada')
const app = express()
const port = 3000

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use('/', indexRouter)
app.use('/tabuadas', tabuadaRouter)

app.listen(port, () => console.log('Tabuada server is listenning on port ' + port))