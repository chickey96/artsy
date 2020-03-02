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
      <div className="user-edit-page">
        <div id="user-edit-navigation-box">
          <div><button>Public Profile</button></div>
          <div><button>Settings</button></div>
          <div><button>Sign Out</button></div>
        </div>
        Your Public Profile
        <div>
          <input placeholder={this.props.currentUser.username}></input>
          <input placeholder={this.props.currentUser.email}></input>
          <input placeholder={this.props.currentUser.username}></input>
        </div>
      </div>
    )};


}

export default UserEdit;