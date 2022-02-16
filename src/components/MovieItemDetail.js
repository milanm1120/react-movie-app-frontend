import React, { Component } from 'react'
import { addToFavorite } from '../redux/actions';
import { connect } from 'react-redux'
// import '../stylesheets/MovieItems.css'

class MovieItemDetail extends Component {


  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/movies/${this.props.match.params.id}`)
    .then(r => r.json())
    .then(data => 
      this.setState({
      movieitemdata: data
    }))
  }

  render() {
    // console.log(this.props);
    // console.log(this.props.match.params.id);
    // console.log(this.state);
    let movie= this.state ? this.state.movieitemdata : null
    console.log(movie);
    return (
      <div id = 'displaymovieitems'>
              
              
              {movie ?  
                
       
                    <div className='movie-items-container'>
        
                      <div id= 'movie-items-poster' className= 'movie-items-poster'>
                    {/* <div> */}
                        <img
                        src={`http://localhost:3001/${movie.poster_path}`}
                        alt={movie.title + " Image"}
                        height='150px' width='100px%'
                        />
                    {/* </div> */}
                    <div id='movie-items-info' className='movie-items-info'>
                        <h3>{movie.title}</h3>
                        <p>{movie.description}</p>
                        <p><strong>Release Date: </strong>{movie.release_date}</p>
                        <p><strong>Ratings: </strong>{movie.online_rating}</p>
                    </div>
                 </div> 
                 </div>
                
                 : '' } 
                
              
        </div>  
    )
  }
}

function mapStateToProps(state) {
  console.log(state);
  return{
    movieitemdata: state.movieitemdata,
  }
}

export default connect(mapStateToProps, null)(MovieItemDetail);

// export default connect(null, {addToFavorite})(MovieItems);