import React from 'react';
import { Route } from 'react-redux';
import Modal from './modal/modal';
import NavBarContainer from './nav_bar/nav_bar_container';
import Splash from './splash';

const App = () => (
  <div className="full-page">
  <Modal/>
  <header className="header">
    <NavBarContainer/>
  </header>
  <Splash/>
  </div>
);

export default App;