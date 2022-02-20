import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Favorite_Review_Buttons extends Component {
  
//   constructor(props) {
//     super(props);
//       this.state = {
//         fav_ids: this.props.fav_ids,
//       };
//   }

// addToFavorite(movieID, is_fav){
//   console.log(is_fav)
//   if (!is_fav){
//     // this.setState({favorite: !this.state.favorite})
//         //   this.props.addToFavorite(this.props.movie)
//         fetch(`http://localhost:3000/api/v1/favorites`, {
//             headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json',
//             },
//             body: JSON.stringify({
//                 'user_id': localStorage.getItem("react_user_id"),
//                 'movie_id': movieID
//                 }),
//             method: 'POST',})
//         .then(r => r.json())
//         .then(data => 
//           console.log(data))
//           this.setState({ fav_ids: [...this.state.fav_ids, movieID] })          //adds movie to favorite array, changes state and triggers a re-render
//   }
//   else (
//     this.removeFavorite(movieID)
//   )
// }

// removeFavorite(movieID) {
//   fetch(`http://localhost:3000/api/v1/favorites/${movieID}`, {
//     headers: {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json',
//     },
//     body: JSON.stringify({
//         'user_id': localStorage.getItem("react_user_id"),
//         'movie_id': movieID
//         }),
//     method: 'DELETE',})
// .then(r => r.json())
// .then(data => 
//   console.log(data))
//   this.setState({
//     fav_ids: this.state.fav_ids.filter(item => item != movieID)
//   })
// }
  
  render() {
    return (

      <div>
          <Link to = {'/home'} ><button className='comment-submit-btn'>Back To Movie List</button></Link>
          Favorite
      </div>
    )
  }
}

export default Favorite_Review_Buttons