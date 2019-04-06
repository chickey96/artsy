import { connect } from 'react-redux';
import Search from './search';
import { searchProducts } from '../../actions/product_action';
import { withRouter } from 'react-router-dom';

const mapDispatchToProps = dispatch => ({
  searchProducts: query => dispatch(searchProducts(query))
})

export default withRouter(connect(null, mapDispatchToProps)(Search))