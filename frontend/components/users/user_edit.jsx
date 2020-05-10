import React from 'react';

const clearState = {
  'email': '',
  'confirm_email': '',
  'Email_error': null,
  'username': '',
  'confirm_username': '',
  'Username_error': null,
  'password': '',
  'confirm_password': '',
  'Password_error': null
}
class UserEdit extends React.Component {

  constructor(props){
    super(props);
    this.state = clearState;
    this.filterErrors = this.filterErrors.bind(this);
    this.modalOverlay = document.getElementsByClassName("screen-overlay");

    this.updateAttribute = this.updateAttribute.bind(this);
    this.openModal = this.openModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  updateAttribute(e){
    e.preventDefault();

    this.props.clearErrors();
    let user = Object.assign({}, this.props.currentUser);
    if (e.target.className == "username-edit-form"){
      if(this.state.username !== this.state.confirm_username){
        this.setState({'Username_error': 'Usernames must match.'})
        return;
      } else {
        user.username = this.state.username;
      }
    } else if (e.target.className == "email-edit-form"){
      if(this.state.email !== this.state.confirm_email){
        this.setState({'Email_error': 'Emails must match.'})
        return;
      } else {
        user.email = this.state.email;
      }
    } else if (e.target.className == "password-edit-form"){
      if(this.state.password !== this.state.confirm_password){
        this.setState({'Password_error': 'Passwords must match.'})
        return;
      } else {
        user.password = this.state.password;
      }
    }

    this.props.updateUser(user)
    this.setState(clearState)
  }

  openModal(e){
    e.preventDefault();

    this.modalOverlay[0].classList.remove("hidden")
  }

  hideModal(e){
    if (e.target != this.modalOverlay[0]) { return; }

    this.modalOverlay[0].classList.add("hidden")
  }

  update(field){
    return (e) => this.setState({ [field]: e.target.value });
  }

  filterErrors(keyword) {
    let state_keyword = keyword + "_error";

    if (this.state[state_keyword]) return this.state[state_keyword];

    return (
      this.props.errors.filter(err => (
        err.includes(keyword) || err.includes('credentials')
      ))[0]
    );
  }

  renderErrors(errorType) {
    return (
      <div className="user-edit-errors">
        {this.filterErrors(errorType)}
      </div>
    );
  }

  render () {
    if (!this.props.currentUser) return null;

    let button_action = this.updateAttribute;
    if(this.props.currentUser.username == "Demo User"){
      button_action = this.openModal;
    }

    return (
      <div id="user-edit-page">
        <div className="user-edit-category" id="user-edit-username">
          <h2>Username</h2>
          <div className="content-to-edit">
            <div className="font-11">Current Username</div>
            <div className="font-11">{this.props.currentUser.username}</div>
            <div className="section-divider"></div>
            <div className="font-14 bold">Change your username</div>
          </div>
          <form onSubmit={button_action} className="username-edit-form">
            <label className="user-edit-label">New Username</label>
            <input type="text" className="user-edit-input"
                   value={this.state.username}
                   onChange={this.update('username')}/>
            <label className="user-edit-label">Confirm New Username</label>
            <input className="user-edit-input" type="text"
                   value={this.state.confirm_username}
                   onChange={this.update('confirm_username')}/>
            <label className="user-edit-label">Your Artsy Password</label>
            <input className="user-edit-input" type="password"/>
            {this.renderErrors('Username')}
            <button className="user-edit-submit">Change Username</button>
          </form>
        </div>

        <div className="user-edit-category" id="user-edit-password">
          <h2>Password</h2>
          <form onSubmit={button_action} className="password-edit-form">
            <label className="user-edit-label">Current Password</label>
            <input className="user-edit-input" type="password"/>
            <label className="user-edit-label">New Password</label>
            <input className="user-edit-input" type="password"
                   value={this.state.password}
                   onChange={this.update('password')}/>
            <label className="user-edit-label">Confirm New Password</label>
            <input className="user-edit-input" type="password"
                   value={this.state.confirm_password}
                   onChange={this.update('confirm_password')}/>
            {this.renderErrors('Password')}
            <button className="user-edit-submit">Change Password</button>
          </form>
        </div>

        <div className="user-edit-category" id="user-edit-email">
          <h2>Email</h2>
          <div className="content-to-edit">
            <div className="font-11">Current Email</div>
            <div className="font-11">{this.props.currentUser.email}</div>
            <div className="section-divider"></div>
            <div className="font-14 bold">Change your email</div>
          </div>
          <form onSubmit={button_action} className="email-edit-form">
            <label className="user-edit-label">New Email</label>
            <input className="user-edit-input" type="text"
                   value={this.state.email}
                   onChange={this.update('email')}/>
            <label className="user-edit-label">Confirm New Email</label>
            <input className="user-edit-input" type="text"
                   value={this.state.confirm_email}
                   onChange={this.update('confirm_email')}/>
            <label className="user-edit-label">Your Artsy Password</label>
            <input className="user-edit-input" type="password"/>
            {this.renderErrors('Email')}
            <button className="user-edit-submit">Change Email</button>
          </form>
        </div>

        <div className="screen-overlay hidden" onMouseDown={this.hideModal}>
          <div className="freeze-demo-edit-modal">
            <div>This page is for reference only.</div>
            <div>The Demo User cannot be edited.</div>
          </div>
        </div>
      </div>
    )};


}

export default UserEdit;