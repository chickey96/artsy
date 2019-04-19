import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  render() {
    return(
    <footer className="footer">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div className="footer-logo">
          Artsy
        </div>
      </Link>
      <div className="footer-phrase">
        Helping you find some things.
      </div>
    </footer>
    )
  }
}

export default Footer;