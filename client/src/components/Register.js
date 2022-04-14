import { useState } from 'react'
import { register } from './api/auth'

const Register = () => {
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)

  const registerUser = async (e) => {
    e.preventDefault()
    // This is hard coded but you can write a form and create a user!
    const newUser = await register('Daffy', 'duck123')
    if (newUser.name === 'error') {
      setError(newUser.detail)
    } else {
      setUser(newUser.user)
    }
  }

  console.log('User', user)
  return (
    <div>
      {error ? <h3>Error! {error}</h3> : null}
      <button onClick={registerUser}>Register User</button>
      {user ? <h3>Hello {user.username}</h3> : null}
    </div>
  )
}

export default Register
