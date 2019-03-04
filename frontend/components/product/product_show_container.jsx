import { connect } from 'react-redux';
import ProductShow from './product_show';

const mapStateToProps = state => {
  const product = { title: 'title1', artist: "charlie", price: '5.00', media_type: 'charcoal'};
  return {product};
};

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);