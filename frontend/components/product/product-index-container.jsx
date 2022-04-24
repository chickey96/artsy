import { connect } from 'react-redux';
import ProductIndex from './product_index';
import { fetchProducts } from '../../actions/product_action';


const mapStateToProps = (state, ownProps) => {
  const products = Object.values(state.entities.products);
  const query = ownProps.match.params.category;
  const category = query;
  const shopPage = false;
  return {category, query, products, shopPage};
};

const mapDispatchToProps = dispatch => ({
  getProducts: query => dispatch(fetchProducts(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductIndex);