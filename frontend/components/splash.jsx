import React from 'react';
import { searchProducts } from '../utils/product_util';
export default class Splash extends React.Component {

  constructor(props){
    super(props)
    this.getProductId = this.getProductId.bind(this)
    this.getProductShow = this.getProductShow.bind(this)
  }

  getProductId(e){
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
    const src1 = 'https://s3-us-west-1.amazonaws.com/artsy-dev/lion.jpg'
    const src2 = 'https://s3-us-west-1.amazonaws.com/artsy-dev/flowers10.jpg'
    const src3 = 'https://s3-us-west-1.amazonaws.com/artsy-dev/bang.jpg'
    const src4 = 'https://s3-us-west-1.amazonaws.com/artsy-dev/flowers24.jpg'
    const src5 = 'https://s3-us-west-1.amazonaws.com/artsy-dev/frank.jpg'
    const checkmarkPath = "M9.057,20.471L2.293,13.707a1,1,0,0,1,1.414-1." +
                          "414l5.236,5.236,11.3-13.18a1,1,0,1,1,1.518,1.3Z"
    const checkmark = (
      <div className="checkmark">
        <svg xmlns="http://www.w3.org/2000/svg">
          <path d={checkmarkPath}></path>
        </svg>
      </div>
    );

    const blurb1 = "A group as large as you make it, " +
                   "coming together to exchange artwork."
    const blurb2 = "Your privacy is our top priority, " +
                   "and we guarantee secure purchases."

    return (
      <div className= "splash-page">
      <div className="catchphrase">
          If it's unconventionally crafted, angsty, or just plain nice to look at, it's on Artsy.
      </div>

      <div className="front-page-pics">
        <div id="pic1" onClick={this.getProductId}>
            <img src={src1} className="front-page-image"/>
        </div>

        <div id="pic2" onClick={this.getProductId}>
            <img src={src2} className="front-page-image" />
        </div>

        <div id="pic3" onClick={this.getProductId}>
            <img src={src3} className="front-page-image" />
        </div>

        <div id="pic4" onClick={this.getProductId}>
            <img src={src4} className="front-page-image" />
        </div>

        <div id="pic5" onClick={this.getProductId}>
            <img src={src5} className="front-page-image" />
        </div>
      </div>

      <div className="front-page-mottos">

        <div className="motto" id="motto1">
          <div className="motto-topline"> {checkmark}
            <div className="motto-title"> Totally unique </div>
          </div>

          <div className="motto-body">
            A variety of never before purchased artwork at your disposal.
          </div>
        </div>

        <div className="motto" id="motto2">
          <div className="motto-topline"> {checkmark}
            <div className="motto-title"> Independent artists </div>
          </div>

          <div className="motto-body">
              Buy directly from two young, up and coming craftswomen.
          </div>
        </div>

        <div className="motto" id="motto3">
          <div className="motto-topline"> {checkmark}
            <div className="motto-title"> Secure transactions </div>
          </div>

          <div className="motto-body">
            State of the art technology protects your personal information.
          </div>
        </div>
      </div>

      <div className="info-box">
        <div className="info-box-text">

          <div className="info-box-header"> What is Artsy? </div>

          <div className="info-box-segment">
            <div className="info-box-title"> A resizable community </div>
            <div className="info-box-body"> {blurb1} </div>
          </div>

          <div className="info-box-segment">
            <div className="info-box-title">
              Supporting self-employed creators
            </div>
            <div className="info-box-body">
              All orders are shipped directly from the artists themselves.
            </div>
          </div>

          <div className="info-box-segment">
            <div className="info-box-title"> No stress </div>
            <div className="info-box-body"> {blurb2} </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
};
