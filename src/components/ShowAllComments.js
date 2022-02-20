import React, { Component } from 'react'
import '../stylesheets/ShowAllComments.css'

export class ShowAllComments extends Component {

  constructor(props) {
    super(props);
    this.state = {
      commentAll: this.props.commentAll
    }
  }

  removeComment(commentID) {
    fetch(`http://localhost:3000/api/v1/comments/${commentID}`, {
      headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      },
      body: JSON.stringify({
          'user_id': localStorage.getItem("react_user_id")
          }),
      method: 'DELETE',})
  .then(r => r.json())
  .then(data => 
    console.log(data))
    this.setState({
      commentAll: this.state.commentAll.filter(item => item.id != commentID)
    })
  }


  render() {
    return (
        <div className ='showallcomments'><br/>
            <hr/>
        { this.state.commentAll ? this.state.commentAll.map(item =>{
                  // console.log(item)
            return <div key={item.id} style= {{color: 'white'}}>
                    
            <ol key= {item.id}>
                <h3>User {item.user.name}:</h3>
                {item.contents}
                <br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick = {() => this.removeComment(item.id)}> Delete Comment</button>
                      <br/><br/><hr/>
            </ol>
        </div>
                     
            }) : ''} 
            </div>
    )
  }
}

export default ShowAllComments


