import { connect } from 'react-redux';
import ProductShow from './product_show';
import {fetchProduct} from '../../actions/product_action';

const mapStateToProps = (state, ownProps) => {
 
  const product = state.entities.products[ownProps.match.params.productId];
  return {product};
};

const mapDispatchToProps = dispatch => ({
  fetchProduct: id => dispatch(fetchProduct(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);