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
    this.activateLink = this.activateLink.bind(this)
  }

  activateLink(e){
    e.preventDefault()

    const category = e.currentTarget.innerText;
    let path = "/products/"

    if (category == 'Drawings'){
      path += 'drawing';
    } else if (category == 'Paintings'){
      path += 'painting';
    } else if (category == 'Flowers') {
      path += 'flowers';
    } else {
      path += 'mixed-media';
    }

    if(this.props.location.pathname !== path){
      this.props.clearProducts();
      this.props.history.push(path)
    }
  }

  render(){
    const category_names = [ "Drawings", "Paintings", "Flowers", "Mixed Media" ]

    return (
      <ul className="splash-grid">

        { category_names.map((category, idx) => (
            <li className="category-li" key={`category-${idx}`}>
              <button onClick={this.activateLink}>
                <div className="category">
                 {category}
                </div>
              </button>
            </li>
        ))}

      </ul>
    )
  }
  }

export default withRouter(connect(null, mapDispatchToProps)(Directory));