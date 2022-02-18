import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Favorite extends Component {
  render() {
    return (

      <div>
          <Link to = {'/home'} ><button className='comment-submit-btn'>Back To Movie List</button></Link>
          Favorite
      </div>
    )
  }
}

export default Favorite