// import React, { useEffect } from 'react' ;
import React, { Component } from 'react' ;
import Header from './components/Header';
import Search from './components/Search';
import MovieResults from './components/MovieResults';
import NavBar from './components/NavBar';



class App extends Component {

  render() {
    return (
      
      <div className='MainContainer'>
        <NavBar />
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