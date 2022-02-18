import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
      <div className='navbar'>
        <nav>
          <div id='navbar-ul' font-color='white'>
            <NavLink to='/'>HOME</NavLink>
            <NavLink to='/SignUp'>REGISTER</NavLink>
            <NavLink to='/Favorite'>FAVORTIES</NavLink>
          </div>
        </nav>
      </div>
    )
  }

export default NavBar;