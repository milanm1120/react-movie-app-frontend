import React, { Component } from 'react'
import {connect } from 'react-redux'
import Header from './Header';
import Search from './Search';
import Login from './Login';
import MovieResults from './MovieResults';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LogoutNavBar from './LogoutNavBar';
import SignUp from './SignUp';
import '../stylesheets/Home.css'

export class Home extends Component {
    render() {
      console.log(this.props)
      console.log(this.state)
      console.log(localStorage.getItem("react_token"))
      const react_token = localStorage.getItem("react_token")       //token is stored as a constant
    return (
         <div id ='displayhome'>
                { !react_token || react_token == 'undefined'? <Login /> :  


            
                <div className = 'home-container'>
                    <div className= 'SearchContainer'>
                        <Search />
                    </div>
                    <div className='RowContainer'>
                        <MovieResults />
                    </div>
                </div>
                }
            </div>
                
        )
    }
}

function mapStateToProps(state) {
    console.log(state);
    return{
        auth:state.auth,
    }
}

export default connect(mapStateToProps, null)(Home);