const authRouter = require('express').Router()

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User } = require('../db/models')
const { JWT_SECRET } = require('../secrects')

const SALT_ROUNDS = 10

authRouter.post('/register', async (req, res, next) => {
  try {
    const { username, password } = req.body

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS)
    const user = await User.createUser({ username, password: hashedPassword })

    const token = jwt.sign(user, JWT_SECRET)

    res.cookie('token', token, {
      sameSite: 'strict',
      httpOnly: true,
      signed: true,
    })

    res.send({ user })
  } catch (error) {
    next(error)
  }
})

authRouter.post('/login', async (req, res, next) => {
  try {
    const { username, password } = req.body

    const user = await User.getUserByUsername(username)

    const validPassword = await bcrypt.compare(password, user.password)

    if (validPassword) {
      const token = jwt.sign(user, JWT_SECRET)

      res.cookie('token', token, {
        sameSite: 'strict',
        httpOnly: true,
        signed: true,
      })

      res.send({ user })
    }
  } catch (error) {
    next(error)
  }
})

authRouter.post('/logout', async (req, res, next) => {
  try {
    res.clearCookie('token', {
      sameSite: 'strict',
      httpOnly: true,
      signed: true,
    })
    res.send({
      loggedIn: false,
      message: 'Logged Out',
    })
  } catch (error) {
    next(error)
  }
})

module.exports = authRouter
