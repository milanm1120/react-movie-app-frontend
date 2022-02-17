import React, { Component } from 'react';
import { API_KEY } from "../secrets.js";
import { movies } from  '../redux/actions/index.js';
import { connect } from 'react-redux';
import { AllComments } from './AllComments'
import '../stylesheets/Comment.css'


class Comment extends Component {
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
      comment: event.target.value
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
        body: JSON.stringify({
            'contents': this.state.comment, 
            'user_id': localStorage.getItem("react_user_id"),
            'movie_id': this.props.movieID
            }),
        method: 'POST',})
    .then(r => r.json())
    .then(data => 
      console.log(data))
      window.location.reload(false);
  }


  render() {
    console.log(this.props.commentAll)
    return(
        <div id = 'displaycomment'>
          <div className = 'comment-container'>
            
            <form onSubmit={(event) => this.handleSubmit(event)}>
              
            


              <input type="text" id="comment-field" className="seach-field" placeholder="Leave A Comment..." onChange={(event) =>this.handleChange(event)} />
              <button id="submitButton" className='comment-submit-btn'>Add Comment</button>
            </form>
          </div>
           <AllComments commentAll={this.props.commentAll} />
        </div>
    )
  }
}

export default connect(null, { movies })(Comment);
