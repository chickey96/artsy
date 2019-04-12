import React from 'react';

class Checkout extends React.Component {
  constructor(props){
    super(props)
    this.exit = this.exit.bind(this)
  }

  exit(){
    this.props.history.goBack();
  }
  render(){
    return(
      <div className='modal-background' onClick={this.exit}>
        {/* stop propagation prevents modal from closing when user clicks inside */}
        <div className='cart-modal-foreground' onClick={e => e.stopPropagation()}>    
          <div className="checkout-modal">
            <div>
              Thank you for your interest in purchasing Artsy products.
            </div>
            <br/>
            <div>
              Right now our website is not set up to complete payment transactions.
            </div>
            <br/>
            <div>
              For more information, contact c.m.hickey06@gmail.com
            </div>
            <br/>
            <div>
              Have a great day! 
            </div>
            
          </div>
        </div>
      </div>
    )
  }
}

export default Checkout;