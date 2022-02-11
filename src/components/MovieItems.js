import React, { Component } from 'react'
import '../stylesheets/MovieItems.css'

const imageUrlComponent = 'https://image.tmdb.org/t/p/w342';

class MovieItems extends Component {
  render() {
    return (
      <div id = 'displaymovieitems'>
        <hr/>
        <div className='movie-items-container'>
          
            <div id= 'movie-items-poster' className= 'movie-items-poster'>
              {/* <br/> */}
              <img
                  src={imageUrlComponent + this.props.movie.poster_path}
                  alt={this.props.movie.title + " Image"}
                  height='150px' width='100px%'
              />
            </div >
            <div id='movie-items-info' className='movie-items-info'>
              <h3>{this.props.movie.title}</h3>
              <p><italic>{this.props.movie.overview}</italic></p>
              <p><strong>Release Date: </strong>{this.props.movie.release_date}</p>
              <p><strong>Ratings: </strong><span className='badge-badge-default'>{this.props.movie.vote_average}</span></p>
              <button>Add To Favorite</button>
            </div>
        </div>  
      </div>
    )
  }
}

export default MovieItems