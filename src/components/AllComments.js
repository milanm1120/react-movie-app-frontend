import React, { Component } from 'react'

export class AllComments extends Component {
  render() {
    return (
        <div className = 'ALL COMMENTS'>
            
        { this.props.commentAll ? this.props.commentAll.map(item =>{
                  // console.log(item)
                  return <li key= {item.id}>
                      {item.contents}
                      {item.created_at} </li>
            }) : ''} 
            </div>
    )
  }
}

export default AllComments


