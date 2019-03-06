import React from 'react';
import { Link } from 'react-router-dom';

const Directory = () => {

    return (
      <ul className="splash-grid">

        <li className="category-li">
          <Link className="directory-link" to="/drawing" style={{ color: '#222222', textDecoration: 'none' }}>
          <div className="category">
              Drawings
          </div>
          </Link>
        </li>

        <li className="category-li">
            <Link to="/painting" style={{ color: '#222222', textDecoration: 'none' }} >
          <div className="category">
              Paintings
          </div>
            </Link>
        </li>

        <li className="category-li">
            <Link to="/flowers" style={{ color: '#222222', textDecoration: 'none' }} >
          <div className="category">
              Flowers
          </div>
            </Link>
        </li>

        <li className="category-li">
            <Link to="/mixed-media" style={{ color: '#222222', textDecoration: 'none' }} >
          <div className="category">
              Mixed Media
          </div>
            </Link>
        </li>


      </ul>
    )
  }

export default Directory;