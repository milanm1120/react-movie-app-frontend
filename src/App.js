// import React, { useEffect } from 'react' ;
import React, { Component } from 'react' ;
import Header from './components/Header';
import Search from './components/Search';
import MovieResults from './components/MovieResults';

const url = 'http://localhost:3000/api/v1/'

class App extends Component {

  signUp = () => {

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({user: { email: 'milan@gmail.com', name:'milan', password:'abc123!'} })
    };
  fetch(url + 'registration', requestOptions)
      .then(response => response.json())
      .then(data => console.log("res data: ", data))
      .catch(er=>console.log(er.message))
  
  } 
  
  signIn = () => {
  
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'milan@gmail.com', password:'abc123!'})
    };
    fetch(url + 'sessions', requestOptions)
      .then(response => response.json())
      .then(data => console.log("res data: ", data))
      .catch(er=>console.log(er.message))
  
  }


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