import React, { Component } from 'react';
import StarRating from './StarRating';
import CommentBox from './CommentBox';

let commentCounter = 1;

class CommentMain extends Component {
    state = {
        comment: '',
        commentLine: [{ commentId:'', text: '', }],
    }

    setCommentLine = () => {
        this.setState({
          commentLine: [
            ...this.state.commentLine,
           { commentId: commentCounter++, text: this.state.comment }],
          comment: '',
        });
    }

    submitCommentLine = (e) => {
        e.preventDefault();
        this.setCommentLine();
       };
    enterCommentLine = (e) => {
        if (e.charCode === 13) {
         this.setCommentLine();
        }
       };

    handleComment = (event) => {
        this.setState({
            comment: event.target.value,
        });
    };

    render() {
        return (
            <div>
                <CommentBox
                    comment={this.state.comment}
                    onComment = {this.handleComment}
                />
            </div>
        )
    }
}

export default CommentMain;