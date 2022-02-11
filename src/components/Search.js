import React, { Component } from 'react';
import { API_KEY } from "../secrets.js";
import { movies } from  '../redux/actions/index.js';
import { connect } from 'react-redux';


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
    this.componentDidMount()
  }

  componentDidMount() {
    let url=`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${this.state.search}`;
    fetch(url)
    .then(r => r.json())
    .then(result => {console.log(result);
    });
    // .then(({movie}) => this.setState({ movieResult: movie}))
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

export default connect(null, { movies })(Search);
