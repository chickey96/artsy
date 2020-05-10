import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container.jsx';
import Splash from './splash';
import { Route, Switch, Redirect } from 'react-router-dom';
import productIndexContainer from './product/product-index-container';
import productShowContainer from './product/product_show_container';
import userShowContainer from './users/user_show_container';
import userEditContainer from './users/user_edit_container';
import DirectoryContainer from './nav_bar/directory';
import CartIndexContainer from './carts/cart_index_container';
import Footer from './footer';
import searchProductIndexContainer from './search/searchProductIndexContainer';
import AuthRoute from '../utils/route_util';
import LoginContainer from './session/login_container';
import SignUpContainer from './session/signup_container';
import Checkout from './carts/checkout';

const App = () => (
  <div id="full-page">
    <div id="non-footer-content">
      <header className="header">
        <NavBarContainer/>
        <DirectoryContainer/>
      </header>

      <Switch>
        <AuthRoute path="/cart" component={CartIndexContainer}/>
        <Route path="/products/:category" component={productIndexContainer}/>
        <Route path="/search/:query" component={searchProductIndexContainer}/>
        <Route path="/product/:productId" component={productShowContainer} />
        <AuthRoute path="/users/edit/:id" component={userEditContainer} />
        <AuthRoute path="/users/:id" component={userShowContainer} />
        <Route path="/" component={Splash}/>
        <Redirect to="/"/>
      </Switch>

      <Switch>
          <Route path='*/login' component={LoginContainer} />
          <Route path='*/signup' component={SignUpContainer} />
          <Route path='/cart/checkout' component={Checkout} />
      </Switch>
    </div>
    <Footer/>
  </div>
);

export default App;