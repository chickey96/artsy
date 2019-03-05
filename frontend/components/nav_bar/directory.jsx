import React from 'react';
import { Link } from 'react-router-dom';

const Directory = () => {

    return (
      <ul className="splash-grid">

        <li className="category-li">
          <div className="category">
            <Link to="/products" style={{ color: '#222222', textDecoration: 'none' }} page_name='Drawings' media_type='charcoal'>
              Drawings
            </Link>
          </div>
        </li>

        <li className="category-li">
          <div className="category">
            <Link to="/products" style={{ color: '#222222', textDecoration: 'none' }} media_type='charcoal'>
              Paintings
                  </Link>
          </div>
        </li>

        <li className="category-li">
          <div className="category">
            <Link to="/products" style={{ color: '#222222', textDecoration: 'none' }} media_type='charcoal'>
              Flowers
                  </Link>
          </div>
        </li>

        <li className="category-li">
          <div className="category">
            <Link to="/products" style={{ color: '#222222', textDecoration: 'none' }} media_type='charcoal'>
              Mixed Media
                  </Link>
          </div>
        </li>

        <li className="category-li">
          <div className="category">
            <Link to="/products" style={{ color: '#222222', textDecoration: 'none' }} media_type='charcoal'>
              3-D Art
                  </Link>
          </div>
        </li>

      </ul>
    )
  }

export default Directory;