const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const authRouter = require('express').Router()
const { User } = require('../db/models')
const { JWT_SECRET, COOKIE_SECRET } = require('../secrets')
const SALT_ROUNDS = 10

authRouter.post('/register', async (req, res, next) => {
  try {
    const { username, password } = req.body
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS)
    const user = await User.createUser({ username, password: hashedPassword })

    delete user.password

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

module.exports = authRouter
