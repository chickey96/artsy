import React from 'react';
import { Link } from 'react-router-dom';
import SearchContainer from '../search/searchContainer'

class NavBar extends React.Component{
  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.currentUserId = this.props.currentUser.id;
  }

  handleLogout(e) {
    e.preventDefault();
    let currPath = this.props.history.location.pathname;
    this.props.logout();
    this.props.history.replace(currPath);
  }

  handleLogin(e){
    e.preventDefault();
    let currPath = this.props.history.location.pathname;
    if(currPath === '/') currPath = ""
    this.props.history.push(`${currPath}/login`);
  }

  handleSignup(e){
    e.preventDefault();
    let currPath = this.props.history.location.pathname;
    if (currPath === '/') currPath = ""
    this.props.history.push(`${currPath}/signup`)
  }

  render(){
    
    const logoutTools = (
        <div  className="options-bar-el" id="logout-cart-options">
          <div className="options-bar-item" id="profile-dropdown" to={`/users/${this.currentUserId}`}>
            You
            <div className="profile-dropdown-content">
              <div className="profile-dropdown-placeholder"></div>
              <div className="profile-dropdown-body">
                <div className="profile-dropdown-bar-1">
                  <div className="user-show-thumbnail"></div>
                  <Link id="profile-link" to={`/users/${this.currentUserId}`}>
                    {this.props.currentUser.username}
                  </Link>
                </div>
                <div>
                  <button id="logout-button" onClick={this.handleLogout}>
                    Log out
                  </button>
                </div>
              </div>
            </div>
          </div>
        
          <Link className="cart-link" to="/cart">
            <div className="cart-image">
              &#x1F6D2; 
            </div>
          </Link>
      </div>
    );

    const loginTools = (
      <div className="options-bar-el" id="login-options">
        <div id="register-div">
          <button className="options-bar-item" id="register-button" onClick={this.handleSignup}>
            Register
          </button>
        </div>

        <div id="login-div">
          <button className="options-bar-item" id="login-button" onClick={this.handleLogin}>
            Sign in
          </button>
        </div>
      </div>
    );

    const relevantButtons = (
        this.props.currentUser ?
        logoutTools :
        loginTools
    )

    return (
      <nav className="nav-bar">
        <div className="offset-banner"></div>

        <div className="options-bar">

          <div className="options-bar-el" id="logo-search">
            <Link to="/" style={{ textDecoration: 'none' }}>
              <div className="options-bar-item" id="logo">
                Artsy
              </div>
            </Link> 

            <div className="options-bar-item" id="search">
              <SearchContainer/>
            </div>

          </div>
          {relevantButtons}
        </div>
      </nav>
    );
  }
}

export default NavBar;