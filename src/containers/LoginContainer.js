import React, { useState} from 'react'
import Login from '../components/Login'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import '../stylesheets/Login.css'
import LogoutNavBar from '../components/LogoutNavBar'
import SignUp from '../components/SignUp'

function LoginContainer() {
      

    return (
      <div id='displaylogin'>
          <div className= 'login-container' id='login-container'>
            <LogoutNavBar />
            <Header />
            <Login />
          </div>
      </div>
    )
  }

export default LoginContainer;