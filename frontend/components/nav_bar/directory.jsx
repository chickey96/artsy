import React from 'react';
import { Link } from 'react-router-dom';

const Directory = () => {

    return (
      <ul className="splash-grid">

        <li className="category-li">
          <div className="category">
            <Link to="/products" style={{ color: '#222222', textDecoration: 'none' }} category='drawing'>
              Drawings
            </Link>
          </div>
        </li>

        <li className="category-li">
          <div className="category">
            <Link to="/products" style={{ color: '#222222', textDecoration: 'none' }} category='painting'>
              Paintings
            </Link>
          </div>
        </li>

        <li className="category-li">
          <div className="category">
            <Link to="/products" style={{ color: '#222222', textDecoration: 'none' }} category='flowers'>
              Flowers
            </Link>
          </div>
        </li>

        <li className="category-li">
          <div className="category">
            <Link to="/products" style={{ color: '#222222', textDecoration: 'none' }} category='mixed-media'>
              Mixed Media
            </Link>
          </div>
        </li>

        <li className="category-li">
          <div className="category">
            <Link to="/products" style={{ color: '#222222', textDecoration: 'none' }} category='3d'>
              3-D Art
            </Link>
          </div>
        </li>

      </ul>
    )
  }

export default Directory;