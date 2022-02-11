export const MOVIES = "MOVIES";
export const ADD_FAVORITE = "ADD_FAVORITE";

export function movies(items) {
  const action = {
    type: MOVIES,
    items,
  };
  return action;
}

export function addToFavorite(movie){
  return{
    type: ADD_FAVORITE,
    movie,
  }
}

