import React from 'react';

class CommentShow extends React.Component {

  constructor(props){
    super(props);
    this.commentInput = React.createRef();
    this.edit = this.edit.bind(this);
    this.state = { inputDisabled: true, 
    inputValue: this.props.comment.body, editing: true, 
    currText: 'Edit Comment'};
  }

  update() {
    return (e) => this.setState({
      ['inputValue']: e.target.value
    });
  }

  edit(e){
    e.preventDefault();
    let newText;
    if(this.state.currText === 'Edit Comment'){
      newText = 'Update';
    }else{
      let comment = Object.assign({}, this.props.comment);
      delete comment.author;
      comment.body = this.state.inputValue;
      debugger;
      
      this.props.updateComment(comment);
      newText = 'Edit Comment';
    }
    const changedInput = !this.state.inputDisabled;
    const changedEditing = !this.state.editing;
    this.setState({
      ['inputDisabled']: changedInput,
      ['editing']: changedEditing,
      ['currText']: newText
    });
  }

  doNothing(){}

  render(){

    let buttonClass = "hidden-button";
    let buttonClick = this.doNothing;
    let buttonText = '';
  
    if(this.props.currentUser === this.props.comment.user_id){
      buttonClass = "edit-button";
      buttonClick = this.edit;
      buttonText = this.state.currText;
    }

    return(
      <div className="comment-container">
        <div className="profile-pic"> &#x1F464; </div>
        <div className="comment-content">
          <div className="comment-author">
              {this.props.comment.author}
            </div>
          <input className="comment-body" 
          type="text" 
          disabled={this.state.inputDisabled}
          onChange={this.update()}
          value={this.state.inputValue}/>
          <div className="comment-edit-button">
            <button className={buttonClass} onClick={buttonClick}>
            {buttonText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default CommentShow;