import React from 'react';
import { Link } from 'react-router-dom';
import SearchContainer from '../search/searchContainer'

class NavBar extends React.Component{
  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
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
        <div  id="logout-div">
          <button className="options-bar-item" id="logout-button" onClick={this.handleLogout}>
            Log out
          </button>
        
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