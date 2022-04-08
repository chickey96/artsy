import { connect } from 'react-redux';
import { fetchProduct } from '../../actions/product_action';
import ProductForm from './product_form';

const mapStateToProps = (state, ownProps) => {
    const currentUser = state.session.currentUser;
    return { currentUser };
};

const mapDispatchToProps = dispatch => ({
    fetchProduct: id => dispatch(fetchProduct(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);