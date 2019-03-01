import React from 'react';
import { withRouter } from 'react-router-dom';
import { createSession } from '../../actions/session_action';


class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { email: '', username: '', password: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginDemoUser = this.loginDemoUser.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.action(user).then(this.props.closeModal);
  }

  update(field){
    return (e) => this.setState({ 
      [field]: e.target.value 
    });
  }

  loginDemoUser(e){
    e.preventDefault();
    const demoUser = {
        email: "zglass@salinger.com", 
        username: "Zooey", 
        password: "whentheFatLadysings" 
      };
      this.props.demoAction(demoUser).then(this.props.closeModal);
  }

  renderLoginErrors() {
    const error = this.props.errors.filter(err => (err.includes('credentials')));
    return (
      <div className="errors">
        <p>
          {error}
        </p>
      </div>
    )
  }
  renderEmailErrors() {
    const emailErrors = this.props.errors.filter(err => (err.includes('Email')))
    return(
      <ul className="errors">
        {emailErrors.map((err, idx) => (
          <li key={`emailErr${idx}`}>{err}</li>
        ))}
      </ul>
    )
  }

  renderUsernameErrors() {
    const usernameErrors = this.props.errors.filter(err => (err.includes('Username')))
    return (
      <ul className="errors">
        {usernameErrors.map((err, idx) => (
          <li key={`usernameErr${idx}`}>{err}</li>
        ))}
      </ul>
    )
  }
  renderPasswordErrors() {
    const passwordErrors = this.props.errors.filter(err => (err.includes('Password')))
    return (
      <ul className="errors">
        {passwordErrors.map((err, idx) => (
          <li key={`passwordErr${idx}`}>{err}</li>
        ))}
      </ul>
    )
  }

  renderUsername() {
    if(this.props.formType === 'Sign in'){
      return null;
    }else{
      return (
        <div className="username-div">
          <label id="username-label" htmlFor="username-input" >First name
          </label>
        <input type="text"
          id="username-input"
          value={this.state.username}
          onChange={this.update('username')}
          className="modal-input" />
          <div className="err-div">
            {this.renderUsernameErrors()}
          </div>
           
        </div>
      )
    }
  }
   

  render() {
    
    return (
      <div className='session-form'>
        
        <br></br>
          <form onSubmit={this.handleSubmit} className="modal-form">
          <div className="login-form">
          <h1 id="greeting">{this.props.greeting}</h1>
          <p id="tagline">{this.props.tagline}</p>
         
            <div className="login-err-div">
              {this.renderLoginErrors()}
            </div>
          
          <label htmlFor="email-input" >Email address</label>
            <input type="text" 
            id="email-input"
            value={this.state.email}
            onChange={this.update('email')}
            className="modal-input"/>
            <div className="err-div">
              {this.renderEmailErrors()}
            </div>
          

          {this.renderUsername()}

          <label htmlFor="password-input" >Password
          </label>
            <input type="password"
            id="password-input"
            value={this.state.password} 
            onChange={this.update('password')} 
            className="modal-input"/>
            <div className="err-div">
              {this.renderPasswordErrors()}
            </div>
            
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