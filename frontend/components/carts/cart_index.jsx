import React from 'react';
import CartShowContainer from './cart_show_container';

class CartIndex extends React.Component {

  componentDidMount() {
    this.props.fetchCarts(this.props.currentUser);
  }

  render(){
    if (!this.props.carts) {
      return null;
    }
    const carts = this.props.carts.map(cart => {
    
      return (
        <div className="carts-index">
          <CartShowContainer cart={cart} />
        </div>
      )
    })

    return (
      <div className="cart-index-container">
        {carts}
      </div>
    )
  }
}

export default CartIndex;