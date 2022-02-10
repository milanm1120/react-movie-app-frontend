import React, { Component } from 'react';
import { API_KEY } from "../secrets";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
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
    let url=`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${this.state.search}`;
    fetch(url, {
      method:'GET',
    }).then(r => r.json())
    .then(result => console.log(result));
  }


  render() {
    return(
        <div className = 'SearchComponent'>
            <form onSubmit={(event) => this.handleSubmit(event)}>
              {/* <label>Search: </label> */}
              <input type="text" id="serachField" name="seachField" placeholder="Search for any movie" onChange={(event) =>this.handleChange(event)} />
              <button id="submitButton">Submit</button>
            </form>
        </div>
    )
  }
}

export default Search;
