import React, { Component } from 'react'

export class SignUp extends Component {

    state = {
        email: '',
        password: '',
        name: ''
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
            alert("all fields are required!!")
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({user: { email, password, name} })
          };
        fetch(url + 'registration', requestOptions)
            .then(response => response.json())
            .then(data => console.log("res data: ", data))
            .catch(er=>console.log(er.message))
    } 
      
      signIn = () => {
      
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
    return (
      <div>
          <form>
              <input type="email" placeHolder="Email" name="email" value={this.state.email} onChange={(event) => this.handleChange(event)} />
              <input type="password" placeHolder="Password" name="password" value={this.state.password} onChange={(event) => this.handleChange(event)}/>
              <input type="text" placeHolder="Name" name="name" value={this.state.name} onChange={(event) => this.handleChange(event)}/>
              <input type="submit" /> 
          </form>
      </div>
    )
  }
}

export default SignUp