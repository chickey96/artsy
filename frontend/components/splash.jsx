import React from 'react';
import { Link } from 'react-router-dom';
export default class Splash extends React.Component {

  render () {
    return (
    <div className= "splash-page">
    <div className="catchphrase">
        If it's unconventionally crafted, angsty, or just plain nice to look at, it's on Artsy.
    </div>

    <div className="front-page-pics">
      <Link to="/product/470" id="pic1" >
          <img src='https://s3-us-west-1.amazonaws.com/artsy-dev/lion.jpg' className="front-page-image"/>
      </Link>

      <Link to="/product/508" id="pic2" >
          <img src='https://s3-us-west-1.amazonaws.com/artsy-dev/flowers10.jpg' className="front-page-image" />
      </Link>

      <Link to="/product/483" id="pic3" >
          <img src='https://s3-us-west-1.amazonaws.com/artsy-dev/bang.jpg' className="front-page-image" />
      </Link>

      <Link to="/product/523" id="pic4" >
          <img src='https://s3-us-west-1.amazonaws.com/artsy-dev/flowers24.jpg' className="front-page-image" />
      </Link>

        <Link to="/product/498" id="pic5" >
            <img src='https://s3-us-west-1.amazonaws.com/artsy-dev/frank.jpg' className="front-page-image" />
        </Link>
    </div>

    <div className="front-page-mottos">

      <div className="motto" id="motto1"> 
        
        <div className="motto-topline">
          <div className="checkmark">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
              aria-hidden="true" focusable="false"><path
              d="M9.057,20.471L2.293,13.707a1,1,0,0,1,1.414-1.414l5.236,5.236,11.3-13.18a1,1,0,1,1,1.518,1.3Z"></path></svg>
          </div>
          <div className="motto-title">
              Totally unique
          </div>
        </div>

        <div className="motto-body">
           A variety of never before purchased artwork at your disposal.
        </div>
      </div>

        <div className="motto" id="motto2">
          <div className="motto-topline">
            <div className="checkmark">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                aria-hidden="true" focusable="false"><path
                  d="M9.057,20.471L2.293,13.707a1,1,0,0,1,1.414-1.414l5.236,5.236,11.3-13.18a1,1,0,1,1,1.518,1.3Z"></path></svg>
            </div>
            <div className="motto-title">
              Independent artists
          </div>
          </div> 

          <div className="motto-body">
              Buy directly from two young, up and coming craftswomen.
          </div>
      </div>

        <div className="motto" id="motto3">
          <div className="motto-topline">
            <div className="checkmark">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                aria-hidden="true" focusable="false"><path
                  d="M9.057,20.471L2.293,13.707a1,1,0,0,1,1.414-1.414l5.236,5.236,11.3-13.18a1,1,0,1,1,1.518,1.3Z"></path></svg>
            </div>
            <div className="motto-title">
              Secure transactions
          </div>
          </div>
          <div className="motto-body">
            State of the art technology protects your personal information.
          </div>
      </div>
    </div>

    <div className="info-box">
      <div className="info-box-text">
    
        <div className="info-box-header">
          What is Artsy?
        </div>
        <div className="info-box-segment">
          <div className="info-box-title">
            A resizable community
          </div>
          <div className="info-box-body">
            A group as large as you make it, coming together to exchange artwork.
          </div>
        </div>
        <div className="info-box-segment">
          <div className="info-box-title">
            Supporting self-employed creators 
          </div>
          <div className="info-box-body">
            All purchases are shipped directly from the artists themselves.
          </div>
        </div>
        <div className="info-box-segment">
          <div className="info-box-title">
            No stress
          </div>
          <div className="info-box-body">
            Your privacy is our top priority, and we guarantee secure purchases.
          </div>
        </div>
      </div>
    </div>
    
    </div>
    )
  }
};
