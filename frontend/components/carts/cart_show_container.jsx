import { connect } from 'react-redux';
import CartShow from './cart_show';
import { deleteCart } from '../../actions/cart_action';


const mapDispatchToProps = dispatch => ({
  deleteCart: id => dispatch(deleteCart(id))
});

export default connect(null, mapDispatchToProps)(CartShow);