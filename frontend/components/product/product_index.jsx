import React from 'react';
import { Link } from 'react-router-dom';

class ProductIndex extends React.Component {


  render() {
  
    const products = this.props.products.map(product => {
       return (
         <Link to={`/products/${product.id}`}>
          <div className="product">
            <div className="product-image">
            </div>
            <div className="product-title">
              {product.title}
            </div>
            <div className="product-artist">
              {product.artist}
            </div>
            <div className="product-price">
              {product.price}
            </div>
          </div>
        </Link>
        )
    });

    return (
      <div className="product-index">
        {products}
      </div>
    )
  }
}

export default ProductIndex;