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
    this.props.clearProducts();
    this.props.history.push('/drawing')
  }
  toPainting(e){
    e.preventDefault();
    this.props.clearProducts();
    this.props.history.push('/painting')
  }
  toMixed(e){
    e.preventDefault();
    this.props.clearProducts();
    this.props.history.push('/mixed-media')
  }
  toFlowers(e){
    e.preventDefault();
    this.props.clearProducts();
    this.props.history.push('/flowers')
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