import React from 'react';
import CommentIndexContainer from './../comments/comment_index_container';

const geography_helper = require('countrycitystatejson');
const us_states = geography_helper.getStatesByShort('US');
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
    const cart = { user_id: this.props.currentUser,
                   product_id: this.props.product.id };

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

  isInCart(){
    for(let i = 0; i < this.props.carts.length; i++){
      let cart = this.props.carts[i];
      if(cart.product_id === this.props.product.id) return true;
    }
    return false;
  }

  getRandomNumber(length){
    return Math.floor(Math.random() * length);
  }

  randomTime(){
    const first_num = this.getRandomNumber(5) + 1;
    return `${first_num}-${first_num + 1} business days`;
  }

  randomCity(){
    const random_state_idx = this.getRandomNumber(us_states.length);
    const random_state = us_states[random_state_idx];
    const cities = geography_helper.getCities('US', random_state);

    if (cities.length == 0) return `${random_state}`;
    const random_city_idx = this.getRandomNumber(cities.length);

    return `${cities[random_city_idx]}, ${random_state}`;
  }

  render () {
    if(!this.props.product) return null;

    let cartOption = (<div></div>);

    if(this.props.currentUser){
      if (this.isInCart()) { 
        cartOption = (
          <button className="white button large expand" onClick={this.visitCart}>
            View in Cart
          </button>
      )} else { 
        cartOption = (
          <button className="black button large expand" onClick={this.addCart}>
            Add To Cart
          </button>
      )}
    }

    return (
      <div className="product-show">

        <div className="left-side">
          <img src={this.props.product.photoUrl} />
          <div className="comment-index">
            <div className="major-line"></div>
            <div className="comment-header">Comments</div>
            <CommentIndexContainer />
          </div>
        </div>

        <div className="right-side">
          <div>
            <div className="show-artist"> {this.props.product.artist} </div>
            <div className="show-title"> {this.props.product.title} </div>
            <div className="show-price"> ${this.props.product.price}.00 </div>
            {cartOption}
          </div>

          <div className="product-specs">
            <h2 >Highlights</h2>
            <div> 
              <div> &#x1f590; </div> <p> Handmade </p> 
            </div>
            <div> 
              <div> &#x1f3f7; </div>  <p> Made to order</p> 
            </div>
            <div> 
              <div> &#x1f9f6; </div> <p> Materials: {this.props.product.materials} </p> 
            </div>
          </div>
          
          <div className="shipping-specs">
            <h2> Shipping and return policies </h2>
            <p> Ready to ship in </p>
            <div> {this.randomTime()} </div>
            <p> Ships from </p>
            <div> {this.randomCity()} </div>
            <p> Cost to ship </p>
            <div> Free </div>
          </div>
        </div>
          
      </div> 
    )};
  }

export default ProductShow;