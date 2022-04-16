import { connect } from 'react-redux';
import { createProduct } from '../../actions/product_action';
import ProductForm from './product_form';

const mapStateToProps = (state) => {
    const currentUser = state.session.currentUser;
    const errors = state.errors.products;
    return { currentUser, errors };
};

const mapDispatchToProps = dispatch => ({
    createProduct: product => dispatch(createProduct(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);