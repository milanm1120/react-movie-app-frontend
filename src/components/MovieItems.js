import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../stylesheets/MovieItems.css'

const imageUrlComponent = 'https://image.tmdb.org/t/p/w342';

class MovieItems extends Component {

    constructor(props) {
      super(props);
        this.state = {
          fav_ids: this.props.fav_ids,
        };
    }

  addToFavorite(movieID, is_fav){
    console.log(is_fav)
    if (!is_fav){
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
            this.setState({ fav_ids: [...this.state.fav_ids, movieID] })          //adds movie to favorite array, changes state and triggers a re-render
    }
    else (
      this.removeFavorite(movieID)
    )
  }

  removeFavorite(movieID) {
    fetch(`http://localhost:3000/api/v1/favorites/${movieID}`, {
      headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      },
      body: JSON.stringify({
          'user_id': localStorage.getItem("react_user_id"),
          'movie_id': movieID
          }),
      method: 'DELETE',})
  .then(r => r.json())
  .then(data => 
    console.log(data))
    this.setState({
      fav_ids: this.state.fav_ids.filter(item => item != movieID)
    })
  }

  // handleClick = (event) => {
  //   this.setState({
  //     favorite: addToFavorite
  //   })
  // }


  render() {
    // console.log(this.props);
    const fav_string = this.state.fav_ids.includes(this.props.movie.id) ? 'Remove Favorite' : 'Add To Favorite'
    const is_fav = this.state.fav_ids.includes(this.props.movie.id) ? true : false
    const btn_class_name = this.state.fav_ids.includes(this.props.movie.id) ? 'option-submit-btn' : 'option-green-btn'
    console.log(this.state.fav_ids)
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
            {/* <Link to = {`/movie/${this.props.movie.id}/view`} > */}
              <h3>{this.props.movie.title}</h3>
              {/* </Link> */}
              <p>{this.props.movie.description}</p>
              <p><strong>Release Date: </strong>{this.props.movie.release_date}</p>
              <p><strong>Online Ratings: </strong>{this.props.movie.online_rating}</p>
              <button className={btn_class_name}  onClick = {() => this.addToFavorite(this.props.movie.id, is_fav)}>{fav_string}</button>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link to = {`/movie/${this.props.movie.id}/view`} ><button className='option-submit-btn'>Leave A Review</button></Link>
            </div> 
          </div>  
        
      </div>
    )
  }
}

export default MovieItems;

// export default connect(null, {addToFavorite})(MovieItems);