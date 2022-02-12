import React, { Component } from 'react';
import '../stylesheets/Header.css'


class Header extends Component {
  render() {
    return (
        <div className = 'displayheader'>
            <div className= 'header-container'>
              <h1>Welcome To Everyone's A Critic</h1>
            </div>
        </div>
    )
  }
}

export default Header;
