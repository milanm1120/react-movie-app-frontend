import { ADD_FAVORITE } from "../actions";

function addToFavorite(state = [], action){
    switch(action.type){
        case 'ADD_FAVORITE':
            // console.log('Movies Added To Favorite', action.movie)
            return state;
        default:
            return state;
    }
}