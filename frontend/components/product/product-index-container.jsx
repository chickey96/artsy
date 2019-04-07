import { connect } from 'react-redux';
import ProductIndex from './product_index';
import {fetchProducts} from '../../actions/product_action';


const mapStateToProps = (state, ownProps) => {
  const products = Object.values(state.entities.products);
  const query = ownProps.match.params.category;
  const category = query;
  return {category, query, products};
};

const mapDispatchToProps = dispatch => ({
  getProducts: query => dispatch(fetchProducts(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductIndex);