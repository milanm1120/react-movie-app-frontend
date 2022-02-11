import React, { Component } from 'react'
import Header from './Header';
import Search from './Search';
import MovieResults from './MovieResults';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './NavBar';
import SignUp from './SignUp';

export class Home extends Component {
  render() {
    return (
      <div>
          {/* <Router>
          <NavBar />
          <Route exact path ="/" component={Home} />
          <Route exact path ="/signup" component={SignUp} /> */}
          {/* <Route exact path ="/favorite" component={Favorite} /> */}
        {/* </Router> */}
          
          
          
          
          
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

export default Home
