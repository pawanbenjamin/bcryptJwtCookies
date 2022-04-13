const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../secrects')

const authRequired = async (req, res, next) => {
  const token = req.signedCookies.token
  console.log('Cookie Token', token)
  try {
    await jwt.verify(token, JWT_SECRET)
  } catch (error) {
    res.status(401).send({
      loggedIn: false,
      message: 'You are def not authorized.',
    })
    return
  }
  next()
}

module.exports = { authRequired }
