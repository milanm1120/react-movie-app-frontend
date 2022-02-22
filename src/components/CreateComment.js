import React, { Component } from 'react';
import { movies } from  '../redux/actions/index.js';
import { connect } from 'react-redux';
import ShowAllComments from './ShowAllComments';
import {Link } from 'react-router-dom';
import StarRating from './StarRating.js';
import '../stylesheets/Comment.css';


class CreateComment extends Component {
  
    state = {
        comment: '',
        commentAll: this.props.commentAll,
        newComments: []
      }

    handleChange = (event) => {
      this.setState({
        comment: event.target.value                 //event.target.value will setState to the value entered into the comment form
      })
    }

    handleSubmit = (event) => {
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
        
        this.setState({ commentAll: [...this.state.commentAll, data] })
      )}
      
      removeComment(commentID) {
        // console.log(this.state)
        fetch(`http://localhost:3000/api/v1/comments/${commentID}`, {
          headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          },
          body: JSON.stringify({
              'user_id': localStorage.getItem("react_user_id")
              }),
          method: 'DELETE',})
      .then(r => r.json())
      .then(data => data)
        // console.log(data)
        
        this.setState({
          commentAll: this.state.commentAll.filter(item => item.id !== commentID)       //unmatched comments are being removed
      })
      }

    

    render() {
      // console.log(this.state.commentAll)
      // console.log(this.state.newComments)

      let refreshedComments = this.state.commentAll
      return(
          <div id = 'displaycomment'>
            <div className = 'comment-container'>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                <textarea id="comment-field" className="comment-field" rows="5" cols='50' placeholder="Enter Your Review Here..." onChange={(event) =>this.handleChange(event)} /><br/>
            <StarRating movieID={this.props.movieID} /><br/>
                <button id="submitButton" className='comment-submit-btn'>Add Review</button>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to = {'/home'} ><button className='comment-submit-btn'>Back To Home</button></Link>
          </form>
            </div>
            <ShowAllComments commentAll={refreshedComments} removeComment={this.removeComment.bind(this)} />
          </div>
        )
    }
}

export default connect(null, { movies })(CreateComment);
