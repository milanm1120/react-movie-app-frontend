import React, { Component } from 'react';
import { FaStar } from 'react-icons/fa'
// import '../stylesheets/StarRating.css'
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";
import '../stylesheets/StarRating.css'

class StarRating extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userRating: 0
    }
  }

 ratingChanged = (newRating) => {
    console.log(newRating);
    fetch(`http://localhost:3000/api/v1/ratings`, {
        headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        },
        body: JSON.stringify({                    //passing the entire state within the body
            'rating': newRating, 
            'user_id': localStorage.getItem("react_user_id"),
            'movie_id': this.props.movieID
            }),
        method: 'POST',})                         //setting the server to recieve a 'POST' request
    .then(r => r.json())
    .then(data => 
      console.log(data))
  };


  componentDidMount() {
    let user_id = localStorage.getItem("react_user_id")
    let movie_id = this.props.movieID
    fetch(`http://localhost:3000/api/v1/ratings?movie_id=${movie_id}&user_id=${user_id}}` )
    .then(r => r.json())
    .then(data => 
      this.setState({
      userRating: data.rating
    }))
  
}



  render () {
    console.log(this.state)
        return(
            <div className='starRating' id='starRating'>
                  <ReactStars
                    count={5}
                    value={this.state.userRating}
                    onChange={(event) => this.ratingChanged(event)}
                    size={25}
                    activeColor="#ffd700"
                  />  
            </div>
          )
        }

}
export default StarRating
