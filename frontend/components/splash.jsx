import React from 'react';
import { connect } from 'react-redux';
import { searchProducts } from '../utils/product_util';

const mapStateToProps = state => {
  return ({ 
    currentUser: state.entities.users[state.session.currentUser] 
  })
};

class Splash extends React.Component {

  constructor(props){
    super(props)
    this.productId = this.productId.bind(this)
    this.getProductShow = this.getProductShow.bind(this)
  }

  productId(e){
    e.preventDefault();

    const urlArr = e.target.src.split('/');
    const unparsedTitle = urlArr[urlArr.length-1];
    let title = unparsedTitle.split('.')[0];

    if(title === 'flowers10') title = 'an energetic bouquet'
    if(title === 'flowers24') title = 'willy wonka'

    searchProducts(title).then(productList => this.getProductShow(productList))
  }

  getProductShow(productList){
    const productId = productList[0].id
    this.props.history.push(`/product/${productId}`)
  }

  render () {
    let catchphrase = "Find truly one of a kind gifts for your loved ones.";
    if(this.props.currentUser){ 
      catchphrase = `Welcome back, ${this.props.currentUser.username}!`;
    };
    
    // TODO: make these dynamic db queries
    const src_urls = [
      'https://s3-us-west-1.amazonaws.com/artsy-dev/lion.jpg',
      'https://s3-us-west-1.amazonaws.com/artsy-dev/flowers10.jpg',
      'https://s3-us-west-1.amazonaws.com/artsy-dev/bang.jpg',
      'https://s3-us-west-1.amazonaws.com/artsy-dev/flowers24.jpg',
      'https://s3-us-west-1.amazonaws.com/artsy-dev/frank.jpg',
    ]

    const motto_titles = [  "Totally unique",
                            "Independent artists",
                            "Secure transactions" ]

    const motto_bodies = [
      "A variety of never before purchased artwork at your disposal.",
      "Buy directly from two young, up and coming craftswomen.",
      "State of the art technology protects your personal information."
    ]

    const info_box_titles = [ "Community growth",
                              "Direct connections ",
                              "Stress free" ]

    const info_box_blurbs = [
      "Artsy is marketplace where artists and collectors come together to buy \
      and sell unique creations. Our growing community promotes \
      small businesses and eco-friendly manufacturing.",
      "At Artsy, there's no mass production or centralized storage - all \
      orders are shipped directly to each buyer by the original creator for \
      more personalized business interactions",
      "Your privacy is our team's top priority. We use top of the line \
      software to guarantee secure transactions and have support staff \
      available to address any questions or concerns.",
    ]

    return (
      <div className= "splash-page">
        <div className="catchphrase"> {catchphrase} </div>

        <div className="splash-pics">
          { src_urls.map((url, idx) => (
              <div key={`img${idx+1}`} id={`img${idx+1}`} onClick={this.productId}>
                <img src={url} className="splash-img"/>
              </div>
          )) }
        </div>

        <div className="front-page-mottos">
          { motto_titles.map((title, idx) => (
              <div className="motto" id={`motto${idx+1}`} key={`motto${idx+1}`}>
                <div className="motto-topline">
                  <div className="checkmark"> &#x2713; </div>
                  <div className="motto-title"> {title} </div>
                </div>

                <div className="motto-body"> {motto_bodies[idx]} </div>
              </div>
          )) }
        </div>

      <div className="info-box">
      
          <div className="info-box-header"> What is Artsy? </div>
          
          { info_box_titles.map((title, idx) => (
              <div className="info-box-segment" key={`info-box-${idx+1}`}>
                <div className="info-box-title"> {title} </div>
                <div className="info-box-body"> {info_box_blurbs[idx]} </div>
              </div>
          )) }
       
      </div>

    </div>
    );
  }
};

export default connect(mapStateToProps, null)(Splash);