import React from 'react'
import SignUp from '../components/SignUp'
import { Link } from 'react-router-dom'

function SignUpContainer() {
    return (
      <div>
          <SignUp />
          <p>Already have an Account, <Link to='/'>Sign In Here!</Link></p>
      </div>
    )
  }

export default SignUpContainer