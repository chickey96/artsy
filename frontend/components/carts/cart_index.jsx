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
      <div className="cart-page">
        <div className="cart-index-container">
          {carts}
        </div>
        

        <div className="vertical-line"></div>

        <div className="col-4">
          <button>Checkout</button>
        </div>
      </div>
    )
  }
}

export default CartIndex;