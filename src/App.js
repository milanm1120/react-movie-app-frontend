// import React, { useEffect } from 'react' ;
import React, { Component } from 'react' ;
import Header from './components/Header';
import Search from './components/Search';
import MovieResults from './components/MovieResults';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import SignUp from './components/SignUp';
import { Link } from 'react-router-dom';
// import Favorite from './compoents/Favorite'
import { connect } from 'react-redux'
import UsersContainer from './containers/UsersContainers'; 
import Login from './components/Login';

class App extends Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/')
    .then(r => r.json())
    .then(data => console.log(data))
  }

  render() {
    return (
      
      <div className='MainContainer'>
        {/* <SignUp /> */}
        <NavBar />
        <Login />
        <p>Don't have an account? <Link to='/signup'>Sign Up here!</Link></p>
      </div>
    )
  }
} 

export default App;   