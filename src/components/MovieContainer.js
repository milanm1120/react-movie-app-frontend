import React, { Component } from 'react';
import{ connect } from 'react-redux';
import MovieCards from './MovieCards';

class MovieContainer extends Component {                //This has to be a class function?
    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.movie.movie_all && this.props.movie.movie_all.map(item =>{          //why do we need this.props.movie.movie_all before the &&?
                    return <MovieCards movie={item} key={item.id} fav_ids={this.props.movie ? this.props.movie.fav_movie_id : null } />
                })}
            </div>
        )
    }
}

function mapStateToProps(state) {               //So the Redux store state is being assigned to the props value above?
    console.log(state);
    return{
        movie:state.movie,
    }
}

export default connect(mapStateToProps, null)(MovieContainer);