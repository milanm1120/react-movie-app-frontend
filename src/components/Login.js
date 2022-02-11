import React, { Component } from 'react'

class Login extends Component {
    state = {
        email: '',
        password: ''
    }

  render() {
    return (
      <div className='login-container'>
          <h3>LOGIN</h3>
          <hr />
          <form>
              <label>Email: </label>
              <input type='email' name='email' placeholder='example@abc.com' value={this.state.email} />
              <label>Password: </label>
              <input type='password' name='password' value={this.state.password} required />

              <input type='submit' value='login' id='login-btn' />
          </form>
      </div>
    )
  }
}

export default Login