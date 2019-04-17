import React from 'react';
import CommentIndexContainer from './../comments/comment_index_container';

class ProductShow extends React.Component {

  constructor(props){
    super(props);
    this.addCart = this.addCart.bind(this);
    this.visitCart = this.visitCart.bind(this);
    this.isInCart = this.isInCart.bind(this);
    this.props.fetchCarts(this.props.currentUser);
  }

  addCart(e){
    e.preventDefault();
    const cart = {user_id: this.props.currentUser, product_id: this.props.product.id};
    this.props.createCart(cart);
  }
  visitCart(e){
    e.preventDefault();
    this.props.history.push('/cart');
  }
  componentDidMount() {
    this.props.fetchCarts(this.props.currentUser)
    .then(this.props.fetchProduct(this.props.match.params.productId));
  }

  parseCategory(media){
    for(let i = 0; i < media.length; i++){
      if(media[i] === ':'){
        return media.slice(i+1);
      }
    }
  }

  isInCart(){
    for(let i = 0; i < this.props.carts.length; i++){
      let cart = this.props.carts[i];
      if(cart.product_id === this.props.product.id){
        return true;
      }
    }
    return false;
  }

  render () {
    if(!this.props.product){
      return null;
    }
    const materials = this.parseCategory(this.props.product.media_type);
    
    let cartOption = (<div></div>);
    if(this.props.currentUser){
      if(!this.isInCart()){
        cartOption = (
          <button className="cart-add-button" onClick={this.addCart}>
            Add To Cart
          </button>
        )
      }
      else {
        cartOption = (
          <button className="cart-visit-button" onClick={this.visitCart}>
            View in Cart 
          </button>
        )
      }
      
    }
    return (
      <div className="product-show-page">

          <div className="product-show">
            <div className="product-section">
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
                <div className="line"></div>
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
                <div className="line"></div> 
                <div className="cart-section">
                  {cartOption}
                </div>
              </div>
            </div>
          <div className="comment-index">
            <div className="major-line"></div>
            <div className="comment-header">Comments</div>
            <CommentIndexContainer/>
          </div>

        </div>


      </div>
    )};


}

export default ProductShow;