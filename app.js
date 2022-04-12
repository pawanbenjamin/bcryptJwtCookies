const express = require('express')
const morgan = require('morgan')

require('dotenv').config()

const app = express()

app.use(morgan('dev'))
app.use(express.json())

app.use('/api', require('./api'))

app.get('*', (req, res, next) => {
  res.status(404).send('Uh oh, what r u looking for?')
})

module.exports = app
