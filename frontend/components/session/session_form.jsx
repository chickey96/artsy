import React from 'react';
import { withRouter } from 'react-router-dom';
import { createSession } from '../../actions/session_action';

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

  loginDemoUser(e){
    e.preventDefault();
    createSession({
      email: "zglass@salinger.com", 
    username: "Zooey", 
    password: "whentheFatLadysings" }
    );
  }

  

  renderErrors() {
    return(
      <div>
        {this.props.errors.map((error, idx) => (
          <p id={`error-${idx}`}>
            {error}
          </p>
          ))} 
      </div>
    );
  }

  render() {
    
    return (
      <div className='session-form'>
        
        <br></br>
          <form onSubmit={this.handleSubmit} className="modal-form">
          <div className="login-form">
          <h1 id="greeting">Create your account</h1>
          <p id="tagline">Registration is easy.</p>
           
          <label htmlFor="email-input" >Email address</label>
            <input type="text" 
            id="email-input"
            value={this.state.email}
            onChange={this.update('email')}
            className="modal-input"/>


          <label htmlFor="username-input" >First name
          </label>
            <input type="text" 
            id="username-input"
            value={this.state.username}
            onChange={this.update('username')}
            className="modal-input"/>
         
          <label htmlFor="password-input" >Password
          </label>
            <input type="password"
            id="password-input"
            value={this.state.password} 
            onChange={this.update('password')} 
            className="modal-input"/>
          <br></br>
          <input className="modal-submit"type="submit" value={this.props.formType}/>
          <div className="modal-divider">
            <span id="or-option">
              OR
            </span>
          </div>
          <button onClick={this.loginDemoUser} id="demo-signin">Demo</button>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(SessionForm);