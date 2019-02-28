import React from 'react';

const NavBar = ({ currentUser, logout, openModal }) => {
  const sessionLinks = () => (
      <nav className="nav-bar">
        <button  onClick={() => openModal('login')}>
          Login 
        </button>

      <button id="register-button" onClick={() => openModal('signup')}>
          Register 
        </button>

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