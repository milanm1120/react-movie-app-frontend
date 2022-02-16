import React, { Component } from 'react'

export class CommentBox extends Component {
  render() {
    const { comment, handleComment, 
        enterCommentLine, submitCommentLine} = this.props;

        const enableCommentButton = () => {
         return (comment ? false : true);
       }
        const changeCommentButtonStyle = () => {
         return (comment ? "comments-button-enabled" : 
         "comments-button-disabled");
       }
       
    return (
        <div className="comments-box">
        <input onKeyPress={enterCommentLine} value={comment}
          id="comments-input" onChange={handleComment}
          type="text" placeholder="Add a comment..." />
        <button onClick={submitCommentLine} type="submit"     
          className="comments-button"id={changeCommentButtonStyle()}
          disabled={enableCommentButton()}>Post</button>
        </div>
       )}
}

export default CommentBox