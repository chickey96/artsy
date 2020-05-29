import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import Splash from './splash';

class SplashRedirect extends React.Component {
  constructor(props) {
    super(props);
    console.log("history", this.props.history)
    this.props.history.push("/")

    // this.redirectToSplashPage(this.props.history)
    // this.path = this.props.history.location.pathname
  }

  render(){
    console.log("rendered")
    return null;
    return (
      <Route path="/" component={Splash}/>
    );
  }
}

// export default withRouter(SplashRedirect);
export default SplashRedirect;