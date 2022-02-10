import authReducer from './authReducer';
import movieReducer from './movieReducer';
import reviewReducer from './reviewReducer';



import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,
  movie: movieReducer,
  review: reviewReducer,
  
});

export default (state, action) => (
    action.type === 'RESET_STATES'
        ? rootReducer(undefined, action)
        : rootReducer(state, action)
)