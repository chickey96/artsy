import React from 'react';

class CartShow extends React.Component {
  constructor(props){
    super(props);
    this.deleteCart = this.deleteCart.bind(this);
    this.state = this.props.cart;
  }

  deleteCart(e){
    e.preventDefault();
    this.props.deleteCart(this.state.id);
  }

  render(){
    if(!this.props.cart){
      return null;
    }
    return (
      <div className="cart-item">

        <div className="col-1">
          <img className="cart-item-image" 
          src={this.state.photoUrl} />
        </div>

        <div className="col-2">
          <div className="cart-item-title">
            {this.state.title}
          </div>
          <button className="cart-delete" onClick={this.deleteCart}>
            Remove Item
          </button>
        </div>

        <div className="col-3">
          <div className="cart-item-price">
            ${this.state.price}.00
          </div>
        </div>

      </div>
    )
  }
}

export default CartShow;