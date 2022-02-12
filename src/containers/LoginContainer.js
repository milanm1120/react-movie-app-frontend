import React, { useState} from 'react'
import Login from '../components/Login'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import '../stylesheets/Login.css'

function LoginContainer() {
      const [token, setToken] =useState();

      if(!token) {
        return <Login setToken={setToken} />
      }

    return (
      <div id='displaylogin'>
          <div className= 'login-container' id='login-container'>
            <Login />
            <p>Don't have an account? <Link to='/signup'>Sign Up Here!</Link></p>
          </div>
      </div>
    )
  }

export default LoginContainer;