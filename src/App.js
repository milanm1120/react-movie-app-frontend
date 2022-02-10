// import React, { useEffect } from 'react' ;
import React, { Component } from 'react' ;
import Header from './components/Header';
import Search from './components/Search';
import MovieResults from './components/MovieResults';

// const url = 'http://localhost:3000/api/v1/'

class App extends Component {
  render() {
    return (
      <div className='MainContainer'>
          <div className = 'HeaderContainer'>
            <Header />
          </div>
          <div className= 'SearchContainer'>
            <Search />
          </div>
          <div className='RowContainer'>
            <MovieResults />
          </div>
      </div>
    )
  }
}

export default App;