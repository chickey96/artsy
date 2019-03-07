import React from 'react';

class CommentIndex extends React.Component {

  componentDidMount(){
    this.props.fetchComments(this.props.match.params.productId);
  }

  render() {
    if (!this.props.comments) {
      return null;
    }
    const comments = this.props.comments.map(comment => {
      return (
        <div className="comment-container">
          <div className="profile-pic"> &#x1F464; </div>
          <div className="comment-content">
            <div className="comment-author">
              {comment.author}
            </div>
            <div className="comment-body" >
              {comment.body}
            </div>
          </div>
        </div>
      )
    })
    return (
      <div className="comment-index-container" >
        {comments}
      </div>
    )
  }
}

export default CommentIndex;