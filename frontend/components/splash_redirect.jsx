import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import Splash from './splash';

class SplashRedirect extends React.Component {
  constructor(props) {
    super(props);
    // this.props.history.push("/")
    this.old_path = this.props.history.location.pathname
    console.log("old_path", this.old_path)
  }

  render(){
    console.log("rendered")
    return (
      <Redirect from={this.old_path} to="/" component={Splash}/>
    );
  }
}

// export default withRouter(SplashRedirect);
export default withRouter(SplashRedirect);