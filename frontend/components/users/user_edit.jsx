import React from 'react';

class UserEdit extends React.Component {

  constructor(props){
    super(props);
  }

  render () {
    if(!this.props.currentUser){
      return null;
    }



    return (
      <div id="user-edit-page">
        <div className="user-edit-category" id="user-edit-username">
          <h2>Username</h2>
          <div className="content-to-edit">
            <div className="font-11">Current Username</div>
            <div className="font-11">fake-username</div>
            <div className="section-divider"></div>
            <div className="font-14 bold">Change your username</div>
          </div>
          <form action="">
            <label className="user-edit-label">New Username</label>
            <input className="user-edit-input" type="text"/>
            <label className="user-edit-label">Confirm New Username</label>
            <input className="user-edit-input" type="text"/>
            <label className="user-edit-label">Your Etsy Password</label>
            <input className="user-edit-input" type="text"/>
            <button className="user-edit-submit">Change Username</button>
          </form>
        </div>

        <div className="user-edit-category" id="user-edit-password">
          <h2>Password</h2>
          <form action="">
            <label className="user-edit-label">Current Password</label>
            <input className="user-edit-input" type="text"/>
            <label className="user-edit-label">New Password</label>
            <input className="user-edit-input" type="text"/>
            <label className="user-edit-label">Confirm New Password</label>
            <input className="user-edit-input" type="text"/>
            <button className="user-edit-submit">Change Password</button>
          </form>
        </div>

        <div className="user-edit-category" id="user-edit-email">
          <h2>Email</h2>
          <div className="content-to-edit">
            <div className="font-11">Current Email</div>
            <div className="font-11">email@email.com</div>
            <div className="section-divider"></div>
            <div className="font-14 bold">Change your email</div>
          </div>
          <form action="">
            <label className="user-edit-label">New Email</label>
            <input className="user-edit-input" type="text"/>
            <label className="user-edit-label">Confirm New Email</label>
            <input className="user-edit-input" type="text"/>
            <label className="user-edit-label">Your Etsy Password</label>
            <input className="user-edit-input" type="text"/>
            <button className="user-edit-submit">Change Email</button>
          </form>
        </div>
      </div>
    )};


}

export default UserEdit;