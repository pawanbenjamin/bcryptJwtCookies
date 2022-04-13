const Register = () => {
  const registerUser = async (e) => {
    e.preventDefault()
    console.log("I'm registering!")
  }

  return (
    <div>
      <button onClick={registerUser}>Register User</button>
    </div>
  )
}

export default Register
