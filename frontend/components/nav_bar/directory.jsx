import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearProducts, fetchProducts } from '../../actions/product_action';

const mapDispatchToProps = dispatch => ({
  clearProducts: () => dispatch(clearProducts()),
  fetchProducts: category => dispatch(fetchProducts(category))
})

class Directory extends React.Component {
  constructor(props){
    super(props)
    this.toDrawing = this.toDrawing.bind(this);
    this.toFlowers = this.toFlowers.bind(this);
    this.toMixed = this.toMixed.bind(this);
    this.toPainting = this.toPainting.bind(this);
  }
  toDrawing(e){
    e.preventDefault();
    if(this.props.location.pathname !== '/products/drawing'){
      this.props.clearProducts();
      this.props.history.push('/products/drawing')
    }
  }
  toPainting(e){
    e.preventDefault();
    if(this.props.location.pathname !== '/products/painting'){
      this.props.clearProducts();
      this.props.history.push('/products/painting')
    }
  }

  toMixed(e){
    e.preventDefault();
    if(this.props.location.pathname !== '/products/mixed-media'){
      this.props.clearProducts();
      this.props.history.push('/products/mixed-media')
    }
  }

  toFlowers(e){
    e.preventDefault();
    if(this.props.location.pathname !== '/products/flowers'){
      this.props.clearProducts();
      this.props.history.push('/products/flowers')
    }
  }

  render(){
    return (
      <ul className="splash-grid">

        <li className="category-li">
          <button onClick={this.toDrawing}>
            <div className="category">
              Drawings
            </div>
          </button>
        </li>

        <li className="category-li">
          <button onClick={this.toPainting}>
            <div className="category">
              Paintings
            </div>
         </button>
        </li>

        <li className="category-li">
          <button onClick={this.toFlowers}>
            <div className="category">
              Flowers
            </div>
          </button>
        </li>

        <li className="category-li">
          <button onClick={this.toMixed}>
            <div className="category">
              Mixed Media
            </div>
          </button>
        </li>

      </ul>
    )
  }
  }

export default withRouter(connect(null, mapDispatchToProps)(Directory));