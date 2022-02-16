import React, { Component } from 'react';
import { API_KEY } from "../secrets.js";
import { movies } from  '../redux/actions/index.js';
import { connect } from 'react-redux';
import '../stylesheets/Search.css'


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
            'user_id': 1,
            'movie_id': 7
            }),
        method: 'POST',})
    .then(r => r.json())
    .then(data => 
      console.log(data))
    
  }

//   search() {
//     // let url=`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${this.state.search}`;
//     let url = `http://localhost:3000/api/v1/movies?query=${this.state.search}`
//     fetch(url)
//     .then(r => r.json())
//     .then(jsonObj => {
//       this.props.movies(jsonObj);
//     });
//     // .then(({movie}) => this.setState({ movieResult: movie}))
//   }

  render() {
    return(
        <div id = 'displaycomment'>
          <div className = 'comment-container'>
            <form onSubmit={(event) => this.handleSubmit(event)}>
              {/* <label>Comment: </label> */}
              <input type="text" id="comment-field" className="seach-field" placeholder="Leave A Comment..." onChange={(event) =>this.handleChange(event)} />
              <button id="submitButton" className='comment-submit-btn'>Add Comment</button>
            </form>
          </div>
        </div>
    )
  }
}

export default connect(null, { movies })(Comment);
