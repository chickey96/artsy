import React from 'react';

const NavBar = ({ currentUser, logout, openModal }) => {
  const sessionLinks = () => (
      <nav className="nav-bar">
        <div className="offset-banner"></div>
        <ul className="options-bar">
        <li id="login-list-el">
          <button id="login-button" onClick={() => openModal('login')}>
            Sign in  
          </button>
        </li>

        <li id="register-list-el">
          <button id="register-button" onClick={() => openModal('signup')}>
            Register 
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