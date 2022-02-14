import React, { Component } from 'react'
import { addToFavorite } from '../redux/actions';
import { connect } from 'react-redux'
import '../stylesheets/MovieItems.css'

const imageUrlComponent = 'https://image.tmdb.org/t/p/w342';

class MovieItems extends Component {

    constructor(props) {
      super(props);
        this.setState = {
          favorite: false,
        };
    }

  // addToFavorite(){
  //   this.setState({favorite: !this.state.favorite})
  //     this.props.addToFavorite(this.props.movie)
  // }

  // handleClick = (event) => {
  //   this.setState({
  //     favorite: addToFavorite
  //   })
  // }


  render() {
    // console.log(this.props);
    return (
      <div id = 'displaymovieitems'>
       
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
              <p>{this.props.movie.overview}</p>
              <p><strong>Release Date: </strong>{this.props.movie.release_date}</p>
              <p><strong>Ratings: </strong>{this.props.movie.vote_average}</p>
              <button onClick = {() => this.addToFavorite()}>Add To Favorite</button>
            </div>
        </div>  
      </div>
    )
  }
}

export default MovieItems;

// export default connect(null, {addToFavorite})(MovieItems);