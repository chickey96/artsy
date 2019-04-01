import React from 'react';
import { Link } from 'react-router-dom';

class ProductIndex extends React.Component {

  componentDidMount() {
    this.props.fetchProducts(this.props.match.params.category);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.category !== this.props.match.params.category){
      this.props.fetchProducts(this.props.match.params.category);
    }
  }

  render() {
   
    const products = this.props.products.map(product => {
   
       return (
         <Link className="product-link" to={`/products/${product.id}`}>
          <div className="product">
          <div className="image-box">
           <img src={product.photoUrl} className="image"/>
          </div>
           <div className="pertinent-info">
            <div className="product-title">
              {product.title}
            </div>
            <div className="product-artist">
              {product.artist}
            </div>
            <div className="product-price">
              {`$${product.price}.00`}
            </div>
             </div>
          </div>
        </Link>
        )
    });

    return (
      <div className="product-index">
        <div className="product-index-interior">
          {products}
        </div>
      </div>
    )
  }
}

export default ProductIndex;