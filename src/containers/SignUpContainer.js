import React from 'react'
import SignUp from '../components/SignUp'
import { Link } from 'react-router-dom'

function SignUpContainer() {
    return (
        <div id='displaysignup'>
            <div className= 'signup-container' id='signup-container'>
                <SignUp />
                <p>Already have an Account, <Link to='/'>Sign In Here!</Link></p>
            </div>
        </div>
    )
  }

export default SignUpContainer