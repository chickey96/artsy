import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  render() {
    return(
      <footer className="footer">
        <div></div>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div className="footer-logo">
            Artsy
          </div>
        </Link>
        <div className="footer-phrase">
          Helping you find unique creations.
        </div>
      </footer>
    )
  }
}

export default Footer;