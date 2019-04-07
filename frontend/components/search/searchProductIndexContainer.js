import { connect } from 'react-redux';
import ProductIndex from '../product/product_index';
import { searchProducts } from '../../actions/product_action';


const mapStateToProps = (state, ownProps) => {
  const products = Object.values(state.entities.products);
  const query = ownProps.match.params.query;
  const category = 'search'
  return { category, query, products };
};

const mapDispatchToProps = dispatch => ({
  getProducts: query => dispatch(searchProducts(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductIndex)