import React, { Component } from 'react';
import { API_KEY } from "../secrets.js";
import { movies } from  '../redux/actions/index.js';
import { connect } from 'react-redux';
import '../stylesheets/Search.css'


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      movieResult: [],
    }
  }

  handleChange = (event) => {
    console.log()
    this.setState({
      search: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log("Movie :", this.state.search);
    this.search()
  }

  search() {
    // let url=`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${this.state.search}`;
    let url = `http://localhost:3000/api/v1/movies?query=${this.state.search}`
    fetch(url)
    .then(r => r.json())
    .then(jsonObj => {
      this.props.movies(jsonObj);
    });
    // .then(({movie}) => this.setState({ movieResult: movie}))
  }

  render() {
    return(
        <div id = 'displaysearch'>
          <div className = 'search-container'>
            <form onSubmit={(event) => this.handleSubmit(event)}>
              {/* <label>Search: </label> */}
              <input type="text" id="search-field" className="seach-field" placeholder="Search for a movie" onChange={(event) =>this.handleChange(event)} />
              <button id="submitButton" className='search-submit-btn'>Submit</button>
            </form>
          </div>
        </div>
    )
  }
}

export default connect(null, { movies })(Search);
