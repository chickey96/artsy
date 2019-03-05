import { connect } from 'react-redux';
import ProductIndex from './product_index';
import {fetchProducts} from '../../actions/product_action';


const mapStateToProps = state => {
  const products = Object.values(state.entities.products);
  const artists = state.entities.users;
  return {products, artists};
};

const mapDispatchToProps = dispatch => ({
  fetchProducts: category => dispatch(fetchProducts(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductIndex);