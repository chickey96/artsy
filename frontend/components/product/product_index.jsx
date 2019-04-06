import React from 'react';
import { Link } from 'react-router-dom';
import ProductIndexItem from './product_index_item';

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

    if(this.props.products.length === 0){
      return (
        <div className="cart-page">
          <div className="empty-cart">No items matched your search.</div>
        </div>
      )
    }
   
    const products = this.props.products.map(product => {
   
       return (
        <Link className="product-link" to={`/products/${product.id}`}>
          <ProductIndexItem product={product}/>
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