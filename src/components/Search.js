import React, { Component } from 'react';

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
    console.log("Movie :", this.state.search)
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
