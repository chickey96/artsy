import React from 'react';
import { Link } from 'react-router-dom';


class NavBar extends React.Component{
  constructor(props){
    super(props);
    debugger;
    this.handleLogout = this.handleLogout.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
    this.props.history.replace("/");
  }

  handleLogin(e){
    e.preventDefault();
    this.props.openModal('login');
  }

  handleSignup(e){
    e.preventDefault();
    this.props.openModal('signup');
  }

  render(){
    
    const logoutTools = (
        <div  id="logout-div">
          <button className="options-bar-item" id="logout-button" onClick={this.handleLogout}>
            Log out
          </button>
        
          <Link className="cart-link" to="/cart">
            <div className="cart-image">
              &#x1F6D2; 
            </div>
            <div className="cart-label">
              Cart
            </div>
          </Link>
      </div>
    );

    const loginTools = (
      <div className="options-bar-el" id="login-options">
        <div id="register-div">
          <button className="options-bar-item" id="register-button" onClick={this.handleLogin}>
            Register
          </button>
        </div>

        <div id="login-div">
          <button className="options-bar-item" id="login-button" onClick={this.handleSignup}>
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
            <div className="options-bar-item" id="logo">
              Artsy
            </div>

            <div className="options-bar-item" id="search"></div>

          </div>
          {relevantButtons}
        </div>
      </nav>
    );
  }
}

export default NavBar;