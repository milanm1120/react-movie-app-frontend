import { MOVIES } from  '../actions/index.js';

function movies(state= [], action){              //taking in the previous state and a defined action object
    switch(action.type){                                //inside the reducer we are updating the reduce based upon the action.
        case 'MOVIES':
            console.log("Movies are: ", action.items);
            return action.items;
        default:
            return state;
    }
}

export default movies