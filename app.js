const express = require('express')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const { COOKIE_SECRET } = require('./secrects')
const { authRequired } = require('./api/utils')

require('dotenv').config()

const app = express()

app.use(morgan('dev'))
app.use(cookieParser(COOKIE_SECRET))
app.use(express.json())

app.use('/api', require('./api'))

app.get('/test', authRequired, (req, res, next) => {
  res.send('All gud')
})

app.get('*', (req, res, next) => {
  res.status(404).send('Uh oh, what r u looking for?')
})

app.use((error, req, res, next) => {
  res.status(500).send(error)
})

module.exports = app
