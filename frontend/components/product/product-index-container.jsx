import { connect } from 'react-redux';
import ProductIndex from './product_index';

const mapStateToProps = state => {
  const products = [{title: 'title1', artist_id: 1, price: '5.00', media_type: 'charcoal'},
    { title: 'title2', artist_id: 1, price: '5.00', media_type: 'charcoal' },
    { title: 'title3', artist_id: 1, price: '5.00', media_type: 'charcoal' },
    { title: 'title4', artist_id: 1, price: '5.00', media_type: 'charcoal' },
    { title: 'title5', artist_id: 1, price: '5.00', media_type: 'charcoal' },
    { title: 'title6', artist_id: 1, price: '5.00', media_type: 'charcoal' },
    { title: 'title7', artist_id: 1, price: '5.00', media_type: 'charcoal' }
];
  return {products};
  // products: state.entities.products.map(id => (state.products[id]))
};

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ProductIndex);