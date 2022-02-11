import { MOVIES } from '../actions';

function movies(state= [], action){              //taking in the previous state and a defined action object
    // switch(action.type){                                //inside the reducer we are updating the reduce based upon the action.
        // case MOVIES:
        //     console.log("MOvies are: ", action.type);
        //     return action.type;
        // default:
            return state;
    // }
}

export default movies