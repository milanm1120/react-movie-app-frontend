import React, { Component } from 'react';
import StarRating from './StarRating';

class Comment extends Component {
    state = {
        rating: '',
        comment: '',
    }

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

export default Comment;