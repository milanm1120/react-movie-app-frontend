import React, { Component } from 'react'
import { signUp } from '../redux/actions/authActions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

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
      
      signIn = () => {
        const url = 'http://localhost:3000/api/v1/'
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: 'milan@gmail.com', password:'abc123!'})
        };
        fetch(url + 'sessions', requestOptions)
          .then(response => response.json())
          .then(data => console.log("res data: ", data))
          .catch(er=>console.log(er.message))
      
      } 

  render() {
    const {  errorMessage } = this.state;

    const { loading, authError, auth, message} = this.props
    if(auth) {
      return <Redirect to='/SignIn'/>
    }


    return (
      <div>
        <div className='signup-main-container'>
          <div className='signup-container'>
            <h3>SIGN UP</h3>
            <hr />
              <form onSubmit={(event) => this.handleSubmit(event)}>
                  <label>Name: </label>
                  <input type="text" placeHolder="Name" name="name" value={this.state.name} onChange={(event) => this.handleChange(event)}/><br/>
                  <label>Email :</label>
                  <input type="email" placeHolder="Email" name="email" value={this.state.email} onChange={(event) => this.handleChange(event)} /><br/>
                  <label>Password: </label>
                  <input type="password" placeHolder="Password" name="password" value={this.state.password} onChange={(event) => this.handleChange(event)}/><br/>
                  
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
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {

  return{
    authError: state.auth.error,
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
