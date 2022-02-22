import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../stylesheets/MovieItems.css'

class MovieCards extends Component {

    state = {
          fav_ids: this.props.fav_ids,
        };

  addToFavorite(movieID, is_fav){                                 // can we send the Favorite and Comment buttons to a seperate container?
    // console.log(is_fav)
    if (!is_fav){
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
            // console.log(data))
            this.setState({ fav_ids: [...this.state.fav_ids, movieID] }))          //adds movie to favorite array, changes state and triggers a re-render
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
  .then(data => data)
    // console.log(data))
    this.setState({
      fav_ids: this.state.fav_ids.filter(item => item != movieID)           //removing the unfavorited movieID. 
    })
  }


  render() {
    const {id, title, description, release_date, online_rating, poster_path} = this.props.movie               //descructuring of movie properties
    const fav_string = this.state.fav_ids.includes(this.props.movie.id) ? 'Remove Favorite' : 'Add To Favorite'
    const is_fav = this.state.fav_ids.includes(this.props.movie.id) ? true : false
    const btn_class_name = this.state.fav_ids.includes(this.props.movie.id) ? 'option-submit-btn' : 'option-green-btn'
    // console.log(this.state.fav_ids)
    return (
      <div id = 'displaymovieitems'>
       
        
          <div className='movie-items-container'>
            <div id= 'movie-items-poster' className= 'movie-items-poster'> 
             
                <img
                    src={poster_path}
                    alt={title + " Image"}
                    height='150px' width='100px%'
                />
              </div >
            <div id='movie-items-info' className='movie-items-info'>
            
              <h3>{title}</h3>
              <p>{description}</p>
              <p><strong>Release Date: </strong>{release_date}</p>
              <p><strong>Online Ratings: </strong>{online_rating}</p>
              <button className={btn_class_name}  onClick = {() => this.addToFavorite(id, is_fav)}>{fav_string}</button>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link to = {`/movie/${id}/view`} ><button className='option-submit-btn'>Leave A Review</button></Link>
            </div> 
          </div>  
        
      </div>
    )
  }
}

export default MovieCards;