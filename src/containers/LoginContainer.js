import React from 'react'
import Login from '../components/Login'
import { Link } from 'react-router-dom'

function LoginContainer() {
    return (
      <div>
          <Login />
          <p>Don't have an account? <Link to='/signup'>Sign Up Here!</Link></p>
       
      </div>
    )
  }

export default LoginContainer