import React, { Component } from 'react'

class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (event) => {
        this.setState ({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        /* incomplete */
    }

  render() {
    return (
      <div className='login-container'>
          <h3>LOGIN</h3>
          <hr />
          <form onSubmit={(event) => this.handleSubmit(event)} >
              <label>Email: </label>
              <input type='email' name='email' placeholder='example@abc.com' value={this.state.email} onChange={(event) => this.handleChange(event)} />
              <label>Password: </label>
              <input type='password' name='password' value={this.state.password} onChange={(event) => this.handleChange(event)} required />

              <input type='submit' value='login' id='login-btn' />
          </form>
      </div>
    )
  }
}

export default Login