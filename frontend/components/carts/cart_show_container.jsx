import { connect } from 'react-redux';
import CartShow from './cart_show';
import { deleteCart, fetchCart } from '../../actions/cart_action';


const mapDispatchToProps = dispatch => ({
  deleteCart: id => dispatch(deleteCart(id)),
  fetchCart: id => dispatch(fetchCart(id))
});

export default connect(null, mapDispatchToProps)(CartShow);