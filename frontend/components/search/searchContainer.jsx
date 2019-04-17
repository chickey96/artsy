import { connect } from 'react-redux';
import Search from './search';
import { searchProducts, clearProducts } from '../../actions/product_action';
import { withRouter } from 'react-router-dom';

const mapDispatchToProps = dispatch => ({
  searchProducts: query => dispatch(searchProducts(query)), 
  clearProducts: () => dispatch(clearProducts())
})

export default withRouter(connect(null, mapDispatchToProps)(Search))