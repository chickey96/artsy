import { connect } from 'react-redux';
import CartIndex from './cart_index';
import { fetchCarts } from '../../actions/cart_action';

const mapStateToProps = state => {

  const carts = Object.values(state.entities.carts);
  const currentUser = state.session.currentUser;
  return { carts, currentUser };
};

const mapDispatchToProps = dispatch => ({
  fetchCarts: userId => dispatch(fetchCarts(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIndex);