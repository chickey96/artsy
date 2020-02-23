import React from 'react';

class UserShow extends React.Component {

  constructor(props){
    super(props);
    this.currentUser = this.props.currentUser;
    this.props.fetchUser(this.props.user);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.user);
  }

  render () {
    if(!this.props.user){
      return null;
    }
    
    return (
      <div>
        <div>
          ${this.props.user.username}
        </div>
      </div>
    )};


}

export default UserShow;