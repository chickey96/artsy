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
        <div>
          <div>
            {comment.body}
          </div>
          <div>
            {comment.author}
          </div>
        </div>
      )
    })
    return (
      <div>
        {comments}
      </div>
    )
  }
}

export default CommentIndex;