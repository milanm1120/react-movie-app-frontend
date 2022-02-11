import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addUser } from '../redux/actions/addUser';

class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (event) => {                             //event is passed as a perameter 
        this.setState ({
            [event.target.name]: event.target.value         //without brackets, the object is trying to set a key of event.target.name.
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addUser(this.state)
    }

  render() {
    return (
      <div className='login-container'>
          <h3>LOGIN</h3>
          <hr />
          <form onSubmit={(event) => this.handleSubmit(event)} >
              <label>Email: </label>
              <input type='email' name='email' placeholder='example@abc.com' value={this.state.email} onChange={(event) => this.handleChange(event)} /><br/>
              <label>Password: </label>
              <input type='password' name='password' value={this.state.password} onChange={(event) => this.handleChange(event)} required /><br/>
              <input type='submit' value='login' id='login-btn' />
          </form>
      </div>
    )
  }
}

export default connect(null, {addUser})(Login)          //we don't need to know whats in our store, we are only adding to our store. So we use 'null' instead of mapStateToProps. The second function is our ./redux/action/addUser