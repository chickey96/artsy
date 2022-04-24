import { connect } from 'react-redux';
import ProductIndex from './product_index';
import { fetchListings } from '../../actions/product_action';


const mapStateToProps = (state, ownProps) => {
    const products = Object.values(state.entities.products);
    const query = null;
    const category = null;
    const currentUser = state.session.currentUser;
    const shopPage = true;
    return { category, query, products, currentUser, shopPage };
};

const mapDispatchToProps = dispatch => ({
    getProducts: () => dispatch(fetchListings())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductIndex);