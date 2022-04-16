import { connect } from 'react-redux';
import { createProduct } from '../../actions/product_action';
import ProductForm from './product_form';

const mapStateToProps = (state) => {
    const currentUser = state.session.currentUser;
    
    return { currentUser};
};

const mapDispatchToProps = dispatch => ({
    createProduct: product => dispatch(createProduct(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);