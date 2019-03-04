import React from 'react';


class ProductShow extends React.Component {

  render () {
    return (
      <div className="product-show-page">

   
      <div className="product-show">
      <div className="show-image">
        <div className="image-placeholder">

        </div>

      </div>
      <div className="show-info">
        <div className="show-title">
          {this.props.product.title}
        </div>
        <div className="show-artist">
          {this.props.product.artist}
        </div>
        <div className="show-price">
          ${this.props.product.price}
        </div>
        <div className="overview">
        <div className="overview-title">
          Overview
        </div>
          <ul className="overview-list">
            <li>
              Handmade item 
            </li>
            <li>
              Materials used: {this.props.product.media_type}
            </li>
            <li>
              Made to order
            </li>
          </ul>
           
        </div>
        
      </div>

        </div>
    </div>
    )};


}

export default ProductShow;