import React from 'react';

const NavBar = ({ currentUser, logout, openModal }) => {
  const sessionLinks = () => (
      <nav className="nav-bar">
        <div className="offset-banner"></div>

        <ul className="options-bar">

          <li className="options-bar-el" id="logo-li">
            <div className="options-bar-item" id="logo">
              Artsy
            </div>  
          </li>

        <li className="options-bar-el" id="search-li">
          <div className="options-bar-item" id="search">
            SearchBarHere
          </div>
        </li>

          <li className="options-bar-el" id="register-list-el">
            <button className="options-bar-item" id="register-button" onClick={() => openModal('signup')}>
              Register
              </button>
          </li>

          <li className="options-bar-el" id="login-list-el">
          <button className="options-bar-item" id="login-button" onClick={() => openModal('login')}>
              Sign in  
            </button>
          </li>

        </ul>
      </nav>
  );

  const greeting = () => (
      <nav>
        <h2>Welcome, {currentUser.username}</h2>
        <button onClick={logout}>Log out</button>
      </nav>
  );

  return (
    currentUser ?
    greeting(currentUser, logout) :
    sessionLinks()
  );
};

export default NavBar;