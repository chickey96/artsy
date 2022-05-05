import { connect } from 'react-redux';
import { createProduct, 
         clearProductErrors, 
         fetchProduct,
         updateProduct } from '../../actions/product_action';
import ProductForm from './product_form';

const mapStateToProps = (state, ownProps) => {
    const currentUserId = state.session.currentUser;
    const errors = state.errors.products;
    const productId = ownProps.match.params.productId;
    let product = state.entities.products[productId] || {};
   
    return { currentUserId, errors, productId, product };
};

const mapDispatchToProps = dispatch => ({
    fetchProduct: productId => dispatch(fetchProduct(productId)),
    createProduct: product => dispatch(createProduct(product)),
    updateProduct: product => dispatch(updateProduct(product)),
    clearProductErrors: () => dispatch(clearProductErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);