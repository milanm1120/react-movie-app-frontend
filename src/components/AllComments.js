import React, { Component } from 'react'

export class AllComments extends Component {
  render() {
    return (
        <div className = 'ALL COMMENTS'>
            
        { this.props.commentAll ? this.props.commentAll.map(item =>{
                  // console.log(item)
                  return <p>{item.contents}</p>;
                  <h1>abcdedfg</h1>
            }) : ''} 
            </div>
    )
  }
}

export default AllComments


