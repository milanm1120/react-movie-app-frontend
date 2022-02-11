import React, { Component } from 'react';
import{ connect } from 'react-redux';
import Search from './Search';
import MovieItems from './MovieItems';

class MovieResults extends Component {
    render() {
        return (
            <div>


                {this.props.movie.map(item =>{
                    return <MovieItems movie={item} key={item.id} />
                })}
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state);
    return{
        movie:state.movie,
    }
}

export default connect(mapStateToProps, null)(MovieResults);