// import React, { useEffect } from 'react' ;
import React, { Component } from 'react' ;
// import Header from './components/Header';
// import Search from './components/Search';
// import MovieResults from './components/MovieResults';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import SignUp from './components/SignUp';
import Favorite from './components/Favorite'
// import { connect } from 'react-redux'
// import UsersContainer from './containers/UsersContainers'; 
import Login from './components/Login';
import SignUpContainer from './containers/SignUpContainer';
import LogoutNavBar from './components/LogoutNavBar';
import UsersContainer from './containers/UsersContainer';
// import Routes from './components/Routes';
import LoginContainer from './containers/LoginContainer';
import Home from './components/Home';
import Header from './components/Header';
import './stylesheets/App.css'
import StarRating from './components/OldStarRating';
import MovieItemDetail from './components/MovieItemDetail';
import CreateComment from './components/CreateComment';
import FavoritesContainer from './containers/FavoritesContainer';
import Footer from './components/Footer';
 

class App extends Component {

  // componentDidMount() {
  //   fetch('http://localhost:3000/api/v1/')
  //   .then(r => r.json())
  //   .then(data => console.log(data))
  // }

  render() {
    return (
      
      <div className='display-app' id='display-app'>
          <div className='text-center'>
          < style>{'body { background-color: black; }'}</style>
         {/* <LogoutNavBar /> */}
            
        {/* <SignUp /> */}
        {/* <LoginContainer /> */}
        {/* <Route path='/user/new' component={SignUp}/>
        
        {/* <p>Don't have an account? <NavLink to='/signup'>Sign Up here!</NavLink></p> */}
        <Router>
          <Header />
          <Route exact path='/' component={Login} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={SignUpContainer} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/movie/:id/view' component={MovieItemDetail} />
          <Route exact path='/movie/:id/comment' component={CreateComment} />
          <Route exact path='/favorites' component={FavoritesContainer} />
          <Footer />
        </Router>

        {/* <StarRating /> */}
         {/* <Home /> */}
        </div>
      </div>
    )
  }
} 

export default App;   