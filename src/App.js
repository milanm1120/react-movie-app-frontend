// import React, { useEffect } from 'react' ;
import React, { Component } from 'react' ;
import Header from './components/Header';
import MovieResults from './components/MovieResults';

// const url = 'http://localhost:3000/api/v1/'

class App extends Component {
  render() {
    return (
      <div className='MainContainer'>
          <Header />
          <MovieResults />
      </div>
    )
  }
}

export default App;