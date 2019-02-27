import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { email: '', username: '', password: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.action(user);
  }

  update(field){
    return (e) => this.setState({ 
      [field]: e.target.value 
    });
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, idx) => (
          <li key={`error-${idx}`}>
            {error}
          </li>
          ))}
      </ul>
    );
  }

  render() {

    return (
      <div className='session-form'>
        
        <br></br>
        <form onSubmit={this.handleSubmit} className="modal-form">
          
          <div onClick={this.props.closeModal} className="close-x">X</div>
          {this.renderErrors()}
          <div className="login-form">

          <br></br>

          <label>Email address
            <input type="text" 
            value={this.state.email}
            onChange={this.update('email')}
            className="modal-input"/>
          </label>

          <label>First name
            <input type="text" 
            value={this.state.username}
            onChange={this.update('username')}
            className="modal-input"/>
          </label>
         
          <label>Password
            <input type="password"
            value={this.state.password} 
            onChange={this.update('password')} 
            className="modal-input"/>
          </label>
          <br></br>
          <input className="modal-submit"type="submit" value={this.props.formType}/>
          
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(SessionForm);