import React, { Component } from 'react'
import {connect } from 'react-redux'
import Header from './Header';
import Search from './Search';
import MovieResults from './MovieResults';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './NavBar';
import SignUp from './SignUp';
import '../stylesheets/Home.css'

export class Home extends Component {
    render() {
      console.log(this.props)
      console.log(this.state)
    return (
            <div id ='displayhome'>
                <div className = 'home-container'>
                    <div className= 'SearchContainer'>
                        <Search />
                    </div>
                    <div className='RowContainer'>
                        <MovieResults />
                    </div>
                </div>
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