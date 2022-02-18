import React, { Component } from 'react'
import { addToFavorite } from '../redux/actions';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
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

  addToFavorite(movieID){
    // this.setState({favorite: !this.state.favorite})
    //   this.props.addToFavorite(this.props.movie)
    fetch(`http://localhost:3000/api/v1/favorites`, {
        headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        },
        body: JSON.stringify({
            'user_id': localStorage.getItem("react_user_id"),
            'movie_id': movieID
            }),
        method: 'POST',})
    .then(r => r.json())
    .then(data => 
      console.log(data))
  }

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
                    src={this.props.movie.poster_path}
                    alt={this.props.movie.title + " Image"}
                    height='150px' width='100px%'
                />
              </div >
            <div id='movie-items-info' className='movie-items-info'>
            <Link to = {`/movie/${this.props.movie.id}/view`} ><h3>{this.props.movie.title}</h3></Link>
              <p>{this.props.movie.description}</p>
              <p><strong>Release Date: </strong>{this.props.movie.release_date}</p>
              <p><strong>Online Ratings: </strong>{this.props.movie.online_rating}</p>
              <button onClick = {() => this.addToFavorite(this.props.movie.id)}>Add To Favorite</button>
            </div> 
          </div>  
        
      </div>
    )
  }
}

export default MovieItems;

// export default connect(null, {addToFavorite})(MovieItems);