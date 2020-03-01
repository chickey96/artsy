import React from 'react';
import { Link } from 'react-router-dom';

class UserShow extends React.Component {

  constructor(props){
    super(props);
    this.currentUser = this.props.currentUser;
  }

  render () {
    if(!this.props.currentUser){
      return null;
    }

    return (
      <div className="user-show-container">
        <div className="user-show-profile">
          <div className="user-show-image">
          </div>
          <div className="user-show-greeting">
            <div id="user-show-username">{this.currentUser.username}</div>
            <Link id="edit-profile" to={`/users/edit/${this.currentUser.id}`}>
              <div id="pencil-icon">&#9998;</div>
              <div id="edit-profile-text">Edit Profile</div>
            </Link>
          </div>
        </div>
      </div>
    )};


}

export default UserShow;