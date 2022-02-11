import React, { Component } from 'react'

class MovieItems extends Component {
  render() {
    return (
      <div>
          <img src={this.props.movie.poster_path} />
          <h3>{this.props.movie.title}</h3>
      </div>
    )
  }
}

export default MovieItems