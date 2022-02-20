import React, { Component } from 'react'
import Search from './Search';
import Login from './Login';
import MovieResults from './MovieResults';
import '../stylesheets/Home.css';

const Home = () => {
    
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

export default Home;