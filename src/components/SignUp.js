import React, { Component } from 'react'
import { signUp } from '../redux/actions/authActions'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'
import '../stylesheets/SignUp.css'


class SignUp extends Component {

    state = {
        email: '',
        password: '',
        name: '',
        errorMessage: ''
    }

    handleChange = (event) => {
        this.setState ({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault() 
        const {email, password, name} = this.state;
        if(email.length === 0 || name.length === 0 || password.length === 0)
        {
            this.setState({errorMessage: "all fields are required!!"})
        }
        else {
            this.props.signUp(this.state)
        }
    } 

  render() {
    const {  errorMessage } = this.state;

    const { loading, authError, auth} = this.props
    let {message} = this.props
    message = message == '' ? null : message
    console.log(this.props)
    console.log(this.state)
    if(message) {
      return <Redirect to='/login'/>
    }


    return (
      <div>
        <div className='signup-main-container'>
          <div className='signup-container'>
            <h3>SIGN UP</h3>
              <form onSubmit={(event) => this.handleSubmit(event)}>
                  <label>Name: </label>
                  <input type="text" placeholder="James Smith" name="name" value={this.state.name} onChange={(event) => this.handleChange(event)}/><br/>
                  <label>Email :</label>
                  <input type="email" placeholder="example@abc.com" name="email" value={this.state.email} onChange={(event) => this.handleChange(event)} /><br/>
                  <label>Password: </label>
                  <input type="password" placeholder="min. 6 characters" name="password" value={this.state.password} onChange={(event) => this.handleChange(event)}/><br/>
                  
                  <p
                      style={{
                        marginTop: "20px",
                        color: "red",
                        fontSize: "18px"
                      }}
                    >
                      {errorMessage}
                    </p>

                    <p
                      style={{
                        marginTop: "20px",
                        color: "red",
                        fontSize: "18px"
                      }}
                    >
                      {authError}
                    </p>
                  
                  <input type="submit" /> 
                  
              </form>
          </div>
          <p>Already have an account, <Link to='/'>Sign In Here!</Link></p>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
console.log(state)
  return{
    authError: state.auth.authError,     
    auth: state.auth.isAuthenticated,
    message: state.auth.message
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    signUp: (user) => dispatch(signUp(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
