import React from 'react'
import SignUp from '../components/SignUp'
import { Link } from 'react-router-dom'
import LogoutNavBar from '../components/LogoutNavBar'
import Header from '../components/Header'

function SignUpContainer() {
    return (
        <div id='displaysignup'>
            <div className= 'signup-container' id='signup-container'>
                <LogoutNavBar />
                {/* <Header /> */}
                <SignUp />
                
            </div>
        </div>
    )
  }

export default SignUpContainer