import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
      <div className='navbar'>
        <nav>
          <ul id='navbar-ul'>
            <li><NavLink to='/'>HOME</NavLink></li>
            <li><NavLink to='/SignUp'>REGISTER</NavLink></li>
            <li><NavLink to='/Favorite'>FAVORTIES</NavLink></li>
          </ul>
        </nav>
      </div>
    )
  }

export default NavBar;