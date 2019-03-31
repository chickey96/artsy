import React from 'react';

class CartShow extends React.Component {
  constructor(props){
    super(props);
    this.deleteCart = this.deleteCart.bind(this);
    this.state = {};
    this.state.cart = this.props.cart;
    this.state.quantity
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
  componentDidMount(){
    this.props.onQuantityChange(this.props.cart.currPrice, this.props.cartNum)
  }
  updatePrice(e){
    e.preventDefault();
    let dropDown = document.getElementById(`dropdown/${this.props.cart.id}`);
    let i = dropDown.selectedIndex;
    let quantity = parseInt(dropDown[i].innerText);
    let oldPrice = this.props.cart.currPrice;
    let newPrice = quantity * this.props.cart.price;
    this.setState({
      cart: {
        currPrice: newPrice
      }
    })
    debugger;
    this.props.onQuantityChange(newPrice, this.props.cartNum, oldPrice);
  }

  render(){
    if(!this.props.cart){
      return null;
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
            Remove Item
          </button>
        </div>

          <div className="drop-down-col" >
            <select id={`dropdown/${this.props.cart.id}`}className="dropdown" onChange={this.updatePrice}>
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
            ${this.props.cart.currPrice}.00
          </div>
        </div>

      </div>
    )
  }
}

export default CartShow;