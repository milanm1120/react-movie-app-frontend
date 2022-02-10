import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class NavBar extends Component {
  render() {
    return (
      <div>
          <NavLink to='/'>HOME</NavLink>
          <NavLink to='/SignUp'>REGISTER</NavLink>
          <NavLink to='/Favorites'>FAVORTIES</NavLink>
      </div>
    )
  }
}

export default NavBar