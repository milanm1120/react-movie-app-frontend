import React, { Component } from 'react';
import { movies } from  '../redux/actions/index.js';
import { connect } from 'react-redux';
import '../stylesheets/Search.css'


class Search extends Component {
  
  state = {
      search: '',
      movieResult: [],
    }

  handleChange = (event) => {
    console.log()
    this.setState({
      search: event.target.value                    //event.target.value will setState to the value entered into the serach form
    })
  }

  handleSubmit = (event) => {                       //fetch is tied to the handleSubmit, so the info from the API will trigger when the user does a search. 
    event.preventDefault()
    this.search()
  }

  search() {
    let url = `http://localhost:3000/api/v1/movies?query=${this.state.search}&user_id=${localStorage.getItem('react_user_id')}`
    fetch(url)
    .then(r => r.json())          //parsing out the response
    .then(jsonObj => {
      this.props.movies(jsonObj);
  
    });
  }

  render() {
    return(
        <div id = 'displaysearch'>
          <div className = 'search-container'>
            <form onSubmit={(event) => this.handleSubmit(event)}>
              <input type="text" id="search-field" className="seach-field" placeholder="Search for a movie" onChange={(event) =>this.handleChange(event)} />
              <button id="submitButton" className='search-submit-btn'>Search</button><br/>
              <p>Click Search To See All Available Movies In Our DataBase</p>
            </form>
          </div>
        </div>
    )
  }
}

export default connect(null, { movies })(Search);
