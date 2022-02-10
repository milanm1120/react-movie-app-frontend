import { MOVIES } from '../actions';

function movies(state=[], action){
    switch(action.type){
        case MOVIES:
            console.log("MOvies are: ", action.type);
            return action.type;
        default:
            return state;
    }
}

export default movies