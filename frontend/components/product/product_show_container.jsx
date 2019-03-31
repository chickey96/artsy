import { connect } from 'react-redux';
import ProductShow from './product_show';
import {fetchProduct} from '../../actions/product_action';
import {createCart} from '../../actions/cart_action';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const product = state.entities.products[ownProps.match.params.productId];
  const currentUser = state.session.currentUser;
  const carts = Object.values(state.entities.carts);
  return {product, currentUser, carts};
};

const mapDispatchToProps = dispatch => ({
  fetchProduct: id => dispatch(fetchProduct(id)),
  createCart: cart => dispatch(createCart(cart))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductShow));