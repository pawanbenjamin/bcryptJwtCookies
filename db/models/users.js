const pool = require('../pool')

const createUser = async ({ username, password }) => {
  const {
    rows: [user],
  } = await pool.query(
    `
          INSERT INTO users(username, password)
          VALUES ($1, $2)
          RETURNING *
      `,
    [username, password]
  )
  return user
}

module.exports = { createUser }
