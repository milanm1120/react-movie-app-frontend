import React, { Component } from 'react' ;
import { Route } from 'react-router-dom';
import Login from './components/Login';
import SignUpContainer from './containers/SignUpContainer';
import Home from './components/Home';
import Header from './components/Header';
import MoviePage from './components/MoviePage';
// import CreateComment from './components/CreateComment';
import Footer from './components/Footer';
import './stylesheets/App.css'
 

class App extends Component {


  render() {
    return (
      
      <div className='display-app' id='display-app'>
          <div className='text-center'>
          < style>{'body { background-color: black; }'}</style>
         
        <Route>
          <Header />
            <Route exact path='/' component={Login} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={SignUpContainer} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/movie/:id/view' component={MoviePage} />
            {/* <Route exact path='/movie/:id/comment' component={CreateComment} /> */}
          <Footer />
        </Route>


        </div>
      </div>
    )
  }
} 

export default App;   