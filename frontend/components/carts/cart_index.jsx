import React from 'react';
import CartShowContainer from './cart_show_container';

class CartIndex extends React.Component {
  constructor(props){
    super(props);
    this.addItem = this.addItem.bind(this);
    this.setTotal = this.setTotal.bind(this);
    let carts = this.props.carts;
    this.state = { carts: this.props.carts };
   
  }

  componentDidMount() {
    this.props.fetchCarts(this.props.currentUser); 
  }

  addItem(itemTotal, cartNum, oldPrice=0){
    debugger;
    let price = Math.abs(itemTotal - oldPrice);
    if(this.state.total){
      this.state.total += price;
    } else {
      this.state.total = price;
    }
    if(cartNum === this.props.carts.length){
      this.setTotal(this.state.total)
    }
    debugger;
  }

  setTotal(total){
    this.setState({ total: total})
    this.render();
  }

  render(){
    if (!this.props.carts) {
      return null;
    }
      this.state.carts = this.props.carts;
      debugger;
      this.state.carts.forEach(cart => {
        cart.currPrice = cart.price;
      });
      let cartNum = 0;
      const carts = this.state.carts.map(cart => {
        cartNum++;
        return (
          <div className="carts-index-item">
            <CartShowContainer cart={cart} cartNum={cartNum} onQuantityChange={this.addItem} />
          </div>
        )
      })
      debugger;
      let tot = 0;
      if(this.state.total){
        tot = this.state.total;
      }
      debugger;
      let tax = Math.round(tot * 0.07 * 100)/100;
      debugger;

    return (
      <div className="cart-page">
        <div className="cart-index-container">
        <div className="cart-container">
            {carts}
        </div>
       
        <div className="checkout-col">
          <div>Your total is</div>
          <br/>
          <div>${this.state.total}.00</div>
          <br/>
          <div>+  {tax} (tax)</div>
          <br/>
          <button>Checkout</button>
        </div>
        </div>
        

      </div>
    )
  }
}

export default CartIndex;