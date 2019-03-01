import React from 'react';
import { withRouter } from 'react-router';

const NavBar = ({ currentUser, logout, openModal }) => {
  const sessionLinks = () => (
      <nav className="nav-bar">
        <div className="offset-banner"></div>

        <div className="options-bar">

          <div className="options-bar-el" id="logo-search">
            <div className="options-bar-item" id="logo">
              Artsy
            </div>  
          
          <div className="options-bar-item" id="search">
            SearchBarHere
          </div>
        </div>

            {relevantButtons}

        </div>
      </nav>
  );
    const handleLogout = (e) => {
      e.preventDefault();
      logout()
    }
  const logoutTools = () => (
      <div  id="logout-div">
        <button className="options-bar-item" 
        id="logout-button" onClick={handleLogout}>Log out</button>
      </div>
  );

  const loginTools = () => (
      <div className="options-bar-el" id="login-options">
      <div id="register-div">
        <button className="options-bar-item" id="register-button" onClick={() => openModal('signup')}>
          Register
              </button>
      </div>

      <div id="login-div">
        <button className="options-bar-item" id="login-button" onClick={() => openModal('login')}>
          Sign in
            </button>
      </div>
      </div>
  );

  const relevantButtons = (
      currentUser ?
      logoutTools() :
      loginTools()
  )

  return (
    sessionLinks()
  );
};

export default withRouter(NavBar);