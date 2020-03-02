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
    const line_1 = "Thank you for your interest in purchasing Artsy products."
    const line_2 = "This platform does not yet support payment transactions."
    const line_3 = "For more information, please contact c.m.hickey06@gmail.com"
    const line_4 = "Have a great day!"

    return(
      <div className='modal-background' onClick={this.exit}>
        {/* stop propagation prevents internal clicks from closing modal */}
        <div className='cart-modal-foreground' onClick={e => e.stopPropagation()}>
          <div className="checkout-modal">
            <div> {line_1} </div>
            <br/>
            <div> {line_2} </div>
            <br/>
            <div> {line_3} </div>
            <br/>
            <div> {line_4} </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Checkout;