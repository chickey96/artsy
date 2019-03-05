import React from 'react';
import Modal from './modal/modal';
import NavBarContainer from './nav_bar/nav_bar_container';
import Splash from './splash';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import productIndexContainer from './product/product-index-container';
import productShowContainer from './product/product_show_container';
import Directory from './nav_bar/directory';

const App = () => (
  <div className="full-page">
  <Modal/>
  <header className="header">
    <Link to="/" style={{textDecoration: 'none'}}>
      <NavBarContainer/>
    </Link>
    <Directory/>
  </header>
  <Switch>
    <Route exact path="/products" component={productIndexContainer}/>
    <Route path="/products/" component={productShowContainer} />
    <Route exact path="/" component={Splash}/>
    <Redirect to="/"/> 
  </Switch>
  </div>
);

export default App;