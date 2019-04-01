import React from 'react';
import CartShowContainer from './cart_show_container';

class CartIndex extends React.Component {

  constructor(props){
    super(props);
    this.checkout = this.checkout.bind(this);
  }

  componentDidMount() {
    this.props.fetchCarts(this.props.currentUser); 
  }

  checkout(){
    debugger;
    this.props.openModal('checkout');
    debugger
  }

  render(){
    if (!this.props.carts) {
      return null;
    }
    //store the number of carts for each product
    let quantityHash = {};
    //filter the array of carts to contain unique products
    let filteredCarts = [];
    this.props.carts.forEach( cart => {
      if(quantityHash[cart.product_id]){
        quantityHash[cart.product_id] += 1;
      } else {
        filteredCarts.push(cart);
        quantityHash[cart.product_id] = 1;
      }
    })
    let total = 0;
    const carts = filteredCarts.map(cart => {
        let quantity = quantityHash[cart.product_id];
        let itemTotal = cart.price * quantity;
        total += itemTotal;
        return (
          <div className="carts-index-item">
            <CartShowContainer carts={this.props.carts} cart={cart} quantity={quantity}/>
          </div>
        )
    })
    let tax = total * 0.07;
    tax = tax.toFixed(2);
    let adjustedTotal = parseFloat(total) + parseFloat(tax);
    adjustedTotal = adjustedTotal.toFixed(2);
    return (
      <div className="cart-page">
        <div className="cart-index-container">

          <div className="cart-container">
            {carts}
          </div>
       
          <div className="checkout-col">
            <div className="total">
              <div className="total-title">
                Your total
              </div> 
              <div className="total-amount">
                <div>Items</div>
                <div>${total}.00</div>
              </div>   
              <div className="tax">
                <div>+ tax</div>
                <div>{`$${tax}`}</div>
              </div>
              <div className="checkout-line"></div>
              <div className="real-total">${adjustedTotal}</div>
            </div>
            <button onClick={this.checkout}>
              Proceed to Checkout
            </button>
          </div>

        </div>
    </div>
    )
  }
}

export default CartIndex;