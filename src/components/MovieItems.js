import React, { Component } from 'react'

const imageUrlComponent = 'https://image.tmdb.org/t/p/w342';

class MovieItems extends Component {
  render() {
    return (
      <div>
          <hr/>
            <img
                src={imageUrlComponent + this.props.movie.poster_path}
                alt={this.props.movie.title + " Image"}
                height='150px' width='100px%'
            />
            <h3>{this.props.movie.title}</h3>
            <p>{this.props.movie.overview}</p>
            <p>Release Date: {this.props.movie.release_date}</p>
            <p>Ratings: {this.props.movie.vote_average}</p>
            
      </div>
    )
  }
}

export default MovieItems