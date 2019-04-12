import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const AuthRoute = ({ component: Component, currentUser, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      currentUser ? (
        <Component {...props} />
      ) : (
        <Redirect to= {
          { pathname: '/login', 
           state: {redirect: true } } }/>
        )
    }
  />
);

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

export default withRouter(connect(mapStateToProps)(AuthRoute));
