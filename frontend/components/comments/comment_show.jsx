import React from 'react';
class CommentShow extends React.Component {

  constructor(props){
    super(props);
    this.commentInput = React.createRef();
    this.edit = this.edit.bind(this);
    this.deleteComment = this.deleteComment.bind(this);

    this.state = { inputDisabled: true,
                   inputValue: this.props.comment.body,
                   editing: true,
                   deleteClass: 'hidden-button',
                   deleteText: '',
                   interum: '',
                   editClass: 'hidden-button',
                   editText: '' };

    if (this.props.currentUser === this.props.comment.user_id) {
      this.state.editClass = "edit-button";
      this.state.editText = 'Edit';
    }
  }

  update() {
    return (e) => this.setState({ ['inputValue']: e.target.value });
  }

  edit(e){
    e.preventDefault();

    let newEditText;
    let newEditClass;
    let newDeleteText;
    let newInterum = '';
    let newDeleteClass = 'hidden-button';

    if(this.state.editText === 'Edit'){
      newEditText = 'Update';
      newDeleteClass = 'delete-button';
      newDeleteText = 'Delete';
      newInterum = 'OR';
      newEditClass = 'update-button';
    }else{
      let comment = Object.assign({}, this.props.comment);
      delete comment.author;
      comment.body = this.state.inputValue;
      this.props.updateComment(comment);
      newEditText = 'Edit';
      newEditClass = 'edit-button';
    }

    const changedInput = !this.state.inputDisabled;
    const changedEditing = !this.state.editing;

    this.setState({
      ['inputDisabled']: changedInput,
      ['editing']: changedEditing,
      ['editText']: newEditText,
      ['deleteClass']: newDeleteClass,
      ['deleteText']: newDeleteText,
      ['interum']: newInterum,
      ['editClass']: newEditClass
    });
  }

  deleteComment(e){
    e.preventDefault();
    this.props.deleteComment(this.props.comment.id);
  }

  render(){
    if(!this.props.comment){
      return null;
    }

    return(
      <div className="comment-container">
        <div className="profile-pic"> &#x1F464; </div>
        <div className="comment-content">
          <div className="comment-author">
              {this.props.comment.author}
          </div>

          <textarea className="comment-body"
          disabled={this.state.inputDisabled}
          onChange={this.update()}
          value={this.state.inputValue}/>

          <button className={this.state.editClass} onClick={this.edit}>
            {this.state.editText}
          </button>

          <div className="delete-div">
            <div className="interum">
              {this.state.interum}
            </div>

            <button className={this.state.deleteClass} onClick={this.deleteComment}>
              {this.state.deleteText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default CommentShow;