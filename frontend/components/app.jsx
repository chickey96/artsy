import React from 'react';
import { Route } from 'react-redux';
import Modal from './modal/modal';
import NavBarContainer from './nav_bar/nav_bar_container';

const App = () => (
  <div>
    <Modal/>
  <NavBarContainer/>
  </div>
);

export default App;