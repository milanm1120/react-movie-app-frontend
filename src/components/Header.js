import React, { Component } from 'react';
import NavBar from './NavBar';
import '../stylesheets/Header.css'


class Header extends Component {

  handleLogout = () => {
    console.log('header test logout')
    localStorage.removeItem("react_token");
    window.location.reload(false);
    }



  render() {
    const react_token = localStorage.getItem("react_token")
    console.log(react_token)
    return (
    
        <div className = 'displayheader'>
          
              <NavBar />
              { react_token && react_token != 'undefined' ?   
                <button className='logout' onClick={this.handleLogout}>LOGOUT</button>
                : ''}
            <div className= 'header-container'>
              <h1>Welcome To Everyone's A Critic</h1>
            </div>
        </div>
        
    )
  }
}

export default Header;
