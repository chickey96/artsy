import React from 'react';
import { Link } from 'react-router-dom';
import ProductIndexItem from './product_index_item';

class ProductIndex extends React.Component {
  constructor(props){
    super(props);
  }

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

    let heading = "";
    let path = (this.props.shopPage ? 'listing' : 'product')
    let classType = (this.props.shopPage ? 'product-link' : 'product-link')

    const products = this.props.products.map((product, i) => (
      <Link key={`${i}`} className={classType} to={`/${path}/${product.id}`}>
        <ProductIndexItem product={product}/>
      </Link>
    ));
    
    let indexInteriorClass = "product-index-interior"
    if(this.props.shopPage) {
      let shopTagline = "Great start! Keep adding listings."

      if (this.props.products.size < 10) {
        shopTagline = "Add as many listings as you can. \
                      Ten or more would be a great start."
      } 

      products.unshift(
        <Link className="product-link" to={'/listing'}>
          <div>
            <div>+</div>
            <div>Add a listing</div>
          </div>
          <div></div>
        </Link>
      )

      while(products.length < 10){
        products.push(
          <div className="product-link">
            <div></div>
            <div></div>
          </div>
        )
      }

      heading = (
      <div className="shop-heading">
          <div className="shop-title"> Stock your shop </div>
          <div className="shop-tagline">
            {`${shopTagline} More listings means \
              more chances to be discovered!`}
          </div>
        </div>
      )

      indexInteriorClass += " shop-index"
    }

    return (
      <div className="product-index">
        { heading }
        <div className={indexInteriorClass}>
          {products}
        </div>
      </div>
    )
  }
}

export default ProductIndex;