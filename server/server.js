const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev'))

require('./routes')(app)

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log('App listening on port:', port)
})

module.exports = app
