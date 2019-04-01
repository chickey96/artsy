import { connect } from 'react-redux';
import CartShow from './cart_show';
import { deleteCart, fetchCart, createCart } from '../../actions/cart_action';


const mapDispatchToProps = dispatch => ({
  deleteCart: id => dispatch(deleteCart(id)),
  fetchCart: id => dispatch(fetchCart(id)),
  createCart: cart => dispatch(createCart(cart))
});

export default connect(null, mapDispatchToProps)(CartShow);