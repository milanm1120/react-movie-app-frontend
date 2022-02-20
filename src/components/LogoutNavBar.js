import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import '../stylesheets/Header.css'

function LogoutNavBar() {

  const handleLogout = () => {
    console.log('header test logout')
    localStorage.removeItem("react_token");
    window.location.reload(false);
    }

    
      const react_token = localStorage.getItem("react_token")
      const react_user_name = localStorage.getItem("react_user_name")
    return (
      <div className='LogoutNavBar'>
        <nav>
          {/* <div id='LogoutNavBar-ul'>
            <NavLink to='/'>HOME</NavLink>
            <NavLink to='/SignUp'>REGISTER</NavLink>
            <NavLink to='/Favorite'>FAVORTIES</NavLink> */}
            <br/>
            <div className ='userName'>
                {/* User: {react_user_name} */}
            </div>
            { react_token && react_token != 'undefined' ?   
                <button className='logout-btn' onClick={handleLogout}>LOGOUT </button>
                : ''}
        </nav>
      </div>
    )
  }

export default LogoutNavBar;