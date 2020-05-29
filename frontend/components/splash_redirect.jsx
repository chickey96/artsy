import React from 'react';
import { withRouter } from 'react-router-dom';

class SplashRedirect extends React.Component {
  constructor(props) {
    super(props);
    this.redirectToSplashPage(this.props.history)
  }

  redirectToSplashPage(history){
    history.replace("/");
  }

  render(){
    return null;
  }
}

export default SplashRedirect;