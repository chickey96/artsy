import React from 'react';
import Modal from './modal/modal';
import NavBarContainer from './nav_bar/nav_bar_container';
import Splash from './splash';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import productIndexContainer from './product/product-index-container';
import productShowContainer from './product/product_show_container';
import Directory from './nav_bar/directory';
import CartIndexContainer from './carts/cart_index_container';
import Footer from './footer';

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
    <Route path="/cart" component={CartIndexContainer}/>
    <Route exact path="/:category" component={productIndexContainer}/>
    <Route exact path="/products/:productId" component={productShowContainer} />
    <Route exact path="/" component={Splash}/>
    <Redirect to="/"/> 
  </Switch>
  <Footer/>
  </div>
);

export default App;