import React from 'react';
import CommentShowContainer from './comment_show_container';

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
          <CommentShowContainer comment={comment}/>
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