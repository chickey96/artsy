import React from 'react';
import CommentShowContainer from './comment_show_container';

class CommentIndex extends React.Component {
  constructor(props){
    super(props);
    this.addComment = this.addComment.bind(this);
    this.updateComment = this.updateComment.bind(this);
    this.state = { body: '', user_id: this.props.currentUser, product_id: this.props.match.params.productId};
  }

  componentDidMount(){
    this.props.fetchComments(this.props.match.params.productId);
  }

  addComment(e){
    e.preventDefault();
    this.props.createComment(this.state);
    this.setState({
      ['body']: ''
    });
  }

  updateComment(){
    return (e) => this.setState({
      ['body']: e.target.value
    });
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
        <div className="add-container">
          <div className="add-title">
            Add Comment
          </div>
          <textarea className="add-input" type="text" value={this.state.body}
            onChange={this.updateComment()} />
          <button className="add-button" onClick={this.addComment}>
            Submit
          </button>
        </div>
        <div className="comment-holder">
          {comments}
        </div>
      </div>
    )
  }
}

export default CommentIndex;