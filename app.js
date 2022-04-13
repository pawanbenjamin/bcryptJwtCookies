const express = require('express')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const { COOKIE_SECRET } = require('./secrets')

const path = require('path')

const { authRequired } = require('./api/utils')

require('dotenv').config()

const app = express()

app.use(morgan('dev'))

app.use(cookieParser(COOKIE_SECRET))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, './client', 'build')))

app.use('/api', require('./api'))

app.get('/test', authRequired, (req, res, next) => {
  res.send('You are authorized')
})

app.get(
  '*'
  // express.static(path.join(__dirname, './client', 'build', 'index.html'))
)

module.exports = app
