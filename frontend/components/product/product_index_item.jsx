import React from 'react';

class ProductIndexItem extends React.Component {

  render(){
    return (
      <div className="product">
        <div className="image-box">
          <img src={this.props.product.photoUrl} className="image" />
        </div>
        <div className="pertinent-info">
          <div className="product-title">
            {this.props.product.title}
          </div>
          <div className="product-price">
            {`$${this.props.product.price}.00`}
          </div>
          <div className="product-artist">
            {this.props.product.artist}
          </div>
        </div>
      </div>
    )
  }
}


export default ProductIndexItem;