import React from 'react';
import { searchProducts } from '../utils/product_util';
export default class Splash extends React.Component {

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

    const checkmarkPath = "M9.057,20.471L2.293,13.707a1,1,0,0,1,1.414-1." +
                          "414l5.236,5.236,11.3-13.18a1,1,0,1,1,1.518,1.3Z"
    const checkmark = (
      <div className="checkmark">
        <svg xmlns="http://www.w3.org/2000/svg">
          <path d={checkmarkPath}></path>
        </svg>
      </div>
    );

    const catchphrase = "If it's unconventionally crafted, angsty, " +
                        "or just plain nice to look at, it's on Artsy."

    const info_box_titles = [ "A resizable community",
                              "Supporting self-employed creators",
                              "No stress" ]

    const info_box_blurbs = [
      "A group as large as you make it, coming together to exchange artwork.",
      "All orders are shipped directly from the artists themselves.",
      "Your privacy is our top priority, and we guarantee secure purchases.",
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
                  {checkmark}
                  <div className="motto-title"> {title} </div>
                </div>

                <div className="motto-body"> {motto_bodies[idx]} </div>
              </div>
          )) }
        </div>

      <div className="info-box">
        <div className="info-box-text">
          <div className="info-box-header"> What is Artsy? </div>
          { info_box_titles.map((title, idx) => (
              <div className="info-box-segment" key={`info-box-${idx+1}`}>
                <div className="info-box-title"> {title} </div>
                <div className="info-box-body"> {info_box_blurbs[idx]} </div>
              </div>
          )) }
        </div>
      </div>

    </div>
    );
  }
};
