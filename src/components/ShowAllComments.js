import React, { Component } from 'react'
import '../stylesheets/ShowAllComments.css'

export class ShowAllComments extends Component {
  render() {
    return (
        <div className ='showallcomments'><br/>
            <hr/>
        { this.props.commentAll ? this.props.commentAll.map(item =>{
                  // console.log(item)
                  return <li key= {item.id}>
                              {item.contents}
                      <br/><br/><hr/>
                      </ li>
                     
            }) : ''} 
            </div>
    )
  }
}

export default ShowAllComments


