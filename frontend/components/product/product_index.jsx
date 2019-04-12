import React from 'react';
import { Link } from 'react-router-dom';
import ProductIndexItem from './product_index_item';

class ProductIndex extends React.Component {

  componentDidMount() {
    this.props.getProducts(this.props.query);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.query !== this.props.query){
        this.props.getProducts(this.props.query);
    } 
  }

  render() { 
    if(this.props.products.length === 0 && this.props.category === 'search'){
      return (
        <div className="cart-page">
          <div className="empty-cart">No items matched your search.</div>
        </div>
      )
    }
   
    const products = this.props.products.map((product, i) => {
   
       return (
        <Link key={`${i}`} className="product-link" to={`/product/${product.id}`}>
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