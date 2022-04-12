const authRouter = require('express').Router()

authRouter.post('/register', async (req, res, next) => {
  try {
    res.send(' Route -> api/auth/register')
  } catch (error) {
    next(error)
  }
})

module.exports = authRouter
