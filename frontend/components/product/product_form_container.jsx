import { connect } from 'react-redux';
import { createProduct, clearProductErrors } from '../../actions/product_action';
import ProductForm from './product_form';

const mapStateToProps = (state) => {
    const currentUserId = state.session.currentUser;
    const errors = state.errors.products;
    return { currentUserId, errors };
};

const mapDispatchToProps = dispatch => ({
    createProduct: product => dispatch(createProduct(product)),
    clearProductErrors: () => dispatch(clearProductErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);