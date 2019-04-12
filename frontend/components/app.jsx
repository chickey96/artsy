import React from 'react';
import Modal from './modal/modal';
import NavBarContainer from './nav_bar/nav_bar_container';
import SplashContainer from './splash';
import { Route, Switch, Redirect } from 'react-router-dom';
import productIndexContainer from './product/product-index-container';
import productShowContainer from './product/product_show_container';
import DirectoryContainer from './nav_bar/directory';
import CartIndexContainer from './carts/cart_index_container';
import Footer from './footer';
import searchProductIndexContainer from './search/searchProductIndexContainer';
import AuthRoute from '../utils/route_util';

const App = () => (
  <div className="full-page">
  <Modal/>
  <header className="header">
    <NavBarContainer/>
    <DirectoryContainer/>
  </header>
  <Switch>
    <AuthRoute path="/cart" component={CartIndexContainer}/>
    <Route exact path="/:category" component={productIndexContainer}/>
    <Route path="/search/:query" component={searchProductIndexContainer}/>
    <Route exact path="/products/:productId" component={productShowContainer} />
    <Route exact path="/" component={SplashContainer}/>
    <Redirect to="/"/> 
  </Switch>
  <Footer/>
  </div>
);

export default App;