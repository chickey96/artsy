import React from 'react';
import { Link } from 'react-router-dom';

class ProductIndex extends React.Component {

  componentDidMount() {
    const path_name = this.props.location.pathname;
    const category = path_name.slice(1);
    this.props.fetchProducts(category);
  }

  componentDidUpdate(prevProps) {
    if(prevProps.location.pathname != this.props.location.pathname){
      const path_name = this.props.location.pathname;
      const category = path_name.slice(1);
      this.props.fetchProducts(category);
    }
  }

  render() {
    const products = this.props.products.map(product => {
      console.log(product.photoUrl);
       return (
         <Link className="product-link" to={`/products/${product.id}`}>
          <div className="product">
           <img src={product.photoUrl} className="image"/>
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