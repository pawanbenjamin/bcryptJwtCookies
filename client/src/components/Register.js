import { useState } from 'react'
import { register } from './api/auth'

const Register = () => {
  const [user, setUser] = useState({})
  const [error, setError] = useState(null)

  const registerUser = async (e) => {
    e.preventDefault()
    const newUser = await register('Jeeermaineee', 'shhhhhh')
    if (newUser.name === 'error') {
      setError(newUser.detail)
    } else {
      setUser(newUser)
    }
  }

  return (
    <div>
      {error ? <h3>Error! {error}</h3> : null}
      <button onClick={registerUser}>Register User</button>
    </div>
  )
}

export default Register
