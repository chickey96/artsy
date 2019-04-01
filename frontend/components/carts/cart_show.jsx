import React from 'react';

class CartShow extends React.Component {
  constructor(props){
    super(props);
    this.deleteCart = this.deleteCart.bind(this);
    this.updatePrice = this.updatePrice.bind(this);
  }

  componentDidUpdate(prevProps){
    if(prevProps.cart.id !== this.props.cart.id){
      this.props.fetchCart(this.props.cart.id)
    }
  }

  deleteCart(e){
    e.preventDefault();
    this.props.deleteCart(this.props.cart.id);
  }
  
  updatePrice(e){
    e.preventDefault();
    let dropDown = document.getElementById(`dropdown/${this.props.cart.product_id}`);
    let i = dropDown.selectedIndex;
    let newQuantity = parseInt(dropDown[i].innerText);
    if(newQuantity === this.props.quantity){
      return;
    }
    if(newQuantity > this.props.quantity){
      let i = this.props.quantity;
      let newCart = { product_id: this.props.cart.product_id, user_id: this.props.cart.user_id};
      while( i < newQuantity){
        this.props.createCart(newCart);
        i++;
      }
    } else {
        let j = this.props.quantity;
        let existingCarts = [];
        this.props.carts.forEach(cart => {
          if(cart.product_id === this.props.cart.product_id){
            existingCarts.push(cart);
          }
        })
        debugger;
        let k = 0;
        while (j > newQuantity) {
          this.props.deleteCart(existingCarts[k].id);
          k++;
          j--;
        }
    }
  }

  render(){
    if(!this.props.cart){
      return null;
    }
    
    let currPrice = this.props.quantity * this.props.cart.price;
    let unitPrice = (<div></div>)
    if (this.props.quantity > 1) {
      unitPrice = `($${this.props.cart.price}.00 each)`
    }
    return (
      <div className="cart-item">

        <div className="photo-col">
          <img className="cart-item-image" 
          src={this.props.cart.photoUrl} />
        </div>

        <div className="title-col">
          <div className="cart-item-title">
            {this.props.cart.title}
          </div>
          <button className="cart-delete" onClick={this.deleteCart}>
            Remove 
          </button>
        </div>

          <div className="drop-down-col" >
            <select value={this.props.quantity} id={`dropdown/${this.props.cart.product_id}`}className="dropdown" onChange={this.updatePrice}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </select>
          </div>

        <div className="price-col">
          <div className="cart-item-price">
            ${currPrice}.00
            <br/>
            <div className="unit-price">
              {unitPrice}
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default CartShow;