import { connect } from 'react-redux';
import ProductIndex from './product_index';
import {fetchProducts} from '../../actions/product_action';


const mapStateToProps = (state, ownProps) => {
  const products = Object.values(state.entities.products);
  const category = ownProps.match.params.category;
  return {category, products};
};

const mapDispatchToProps = dispatch => ({
  fetchProducts: category => dispatch(fetchProducts(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductIndex);