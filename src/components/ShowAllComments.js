import React, { Component } from 'react'
import '../stylesheets/ShowAllComments.css'

class ShowAllComments extends Component {

    state = {
      commentAll: this.props.commentAll
    }

  


  render() {
    console.log(this.state.commentAll)
    let refreshedComments = this.props.commentAll
    // refreshedComments = refreshedComments.filter((item, index) => refreshedComments.indexOf(item) === index);
    return (
        <div className ='showallcomments'><br/>
            <hr/>
        { refreshedComments ? refreshedComments.map(item =>{
            return <div key={item.id} style= {{color: 'white'}}>
                    
            <ol key= {item.id}>
                <h3>User {item.user.name}:</h3>
                {item.contents}
                <br/><br/>
                {item.user.id == localStorage.getItem("react_user_id") ?  
                <button className='delete-btn' onClick = {() => this.props.removeComment(item.id)}> Delete Comment</button> : '' }
                      <br/><br/><hr/>
            </ol>
        </div>
                     
            }) : ''} 
            </div>
    )
  }
}

export default ShowAllComments


