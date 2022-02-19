import React, { Component } from 'react';
import { API_KEY } from "../secrets.js";
import { movies } from  '../redux/actions/index.js';
import { connect } from 'react-redux';
import { ShowAllComments } from './ShowAllComments'
import {Link } from 'react-router-dom'
import StarRating from './StarRating.js';
import '../stylesheets/Comment.css'


class CreateComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      commentResult: [],
    }
  }



  handleChange = (event) => {
    console.log()
    this.setState({
      comment: event.target.value                 //event.target.value will setState to the value entered into the comment form
    })
  }

  handleSubmit = (event) => {
      console.log(this.state.comment)
    event.preventDefault()
    fetch(`http://localhost:3000/api/v1/comments`, {
        headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        },
        body: JSON.stringify({                    //passing the entire state within the body
            'contents': this.state.comment, 
            'user_id': localStorage.getItem("react_user_id"),
            'movie_id': this.props.movieID
            }),
        method: 'POST',})                         //setting the server to recieve a 'POST' request
    .then(r => r.json())
    .then(data => 
      console.log(data))
      window.location.reload(false);              //reloads the page using the version of the page cached by the browser
  }


  render() {
    console.log(this.props.commentAll)
    return(
        <div id = 'displaycomment'>
          <div className = 'comment-container'>
            
            <form onSubmit={(event) => this.handleSubmit(event)}>
              
            


              <textarea id="comment-field" className="comment-field" rows="5" cols='50' placeholder="Enter Your Review Here..." onChange={(event) =>this.handleChange(event)} /><br/>
              <StarRating /><br/>
              <button id="submitButton" className='comment-submit-btn'>Add Review</button>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link to = {'/home'} ><button className='comment-submit-btn'>Back To Movie List</button></Link>
            </form>
          </div>
           <ShowAllComments commentAll={this.props.commentAll} />
        </div>
    )
  }
}

export default connect(null, { movies })(CreateComment);
