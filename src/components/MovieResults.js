import React, { Component } from 'react';
import{ connect } from 'react-redux';
import Search from './Search';
import MovieItems from './MovieItems';

class MovieResults extends Component {
    render() {
        console.log(this.props)
        return (
            <div>


                {this.props.movie.movie_all && this.props.movie.movie_all.map(item =>{
                    return <MovieItems movie={item} key={item.id} fav_ids={this.props.movie ? this.props.movie.fav_movie_id : null } />
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