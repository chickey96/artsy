import React from 'react';
import CommentIndexContainer from './../comments/comment_index_container';

class ProductShow extends React.Component {

  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.productId);
  }

  componentDidUpdate(prevProps){
    if(prevProps.match.params.productId != this.props.match.params.productId){
      this.props.fetchProduct(this.props.match.params.productId);
    }
  }

  render () {
    if(!this.props.product){
      return null;
    }
    let media = this.props.product.media_type;
    let materials = "";
    for(let i = 0; i < media.length; i++){
      if(media[i] === ':'){
        materials = media.slice(i+1);
        break;
      }
    }
    return (
      <div className="product-show-page">

   
      <div className="product-show">
      <div className="show-image">
        <div className="image-placeholder">
        <img src={this.props.product.photoUrl} className="image-show" />
        </div>

      </div>
      <div className="show-info">
        <div className="show-title">
          {this.props.product.title}
        </div>
        <div className="show-artist">
          Made by: {this.props.product.artist}
        </div>
        <div className="show-price">
          ${this.props.product.price}.00
        </div>

        <div className="line">

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
              Materials used: {materials}
            </li>
            <li>
              Made to order
            </li>
          </ul>
           
        </div>

            <div className="line">

            </div>
        
      </div>

        </div>
      <div>
        <CommentIndexContainer/>
      </div>

    </div>
    )};


}

export default ProductShow;