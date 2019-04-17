import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { email: '', username: '', password: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginDemoUser = this.loginDemoUser.bind(this);
    this.exit = this.exit.bind(this);
    this.getClassName = this.getClassName.bind(this);
  }
  
  //clear errors and return to original page when exiting modal
  exit() {
    this.props.clearErrors();
    const currPath = this.props.history.location.pathname;
    const splitUrl = currPath.split('/');
    let newUrl = splitUrl.slice(0, splitUrl.length-1).join("/");
    this.props.history.replace(newUrl);
  }

  //determine whether modal input should be red due to errors 
  getClassName(inputName){
    const err = this.props.errors.filter(err => (err.includes(inputName)));
    if(err.length > 0) return 'input-error';
    if(inputName === 'Email' || inputName === 'Password'){
      const genErr = this.props.errors.filter(err => (err.includes('credentials')));
      if(genErr.length > 0) return 'input-error';
    }
    return 'modal-input';
  }

  //close modal if login was successful
  check(info){
    if(info.props.currentUser) this.exit()
  }

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state);
    //see if login was successful
    this.props.action(user).then( () => this.check(this))
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
        password: "whentheFatLadysings" 
      };
      this.props.demoAction(demoUser)
      this.exit();
  }

  renderEmailErrors() {
    const emailErrors = this.props.errors.filter(err => (err.includes('Email') || err.includes('credentials')))
    return (
      <div className="errors">
        {emailErrors[0]}
      </div>
    )}

  renderUsernameErrors() {
    const usernameErrors = this.props.errors.filter(err => (err.includes('Username')))
    return (
      <div className="errors">
        {usernameErrors[0]}
      </div>
    )}
  renderPasswordErrors() {
    const passwordErrors = this.props.errors.filter(err => (err.includes('Password') || err.includes('credentials')))
    return (
      <div className="errors">
        {passwordErrors[0]}
      </div>
    )}

  renderUsername() {
    if(this.props.formType === 'Sign in'){
      return null;
    }else{
      return (
        <div className="username-div">
          <label className='input-label' >First name
            <input type="text" value={this.state.username} onChange={this.update('username')}
            className={this.getClassName('Username')} />
          </label>
          <div className="err-div">
            {this.renderUsernameErrors()}
          </div>
           
        </div>
      )}}
   
  render() {
   
    return (<div className='modal-background' onClick={this.exit}>
      {/* stop propagation prevents modal from closing when user clicks inside */}
      <div className='modal-foreground' onClick={e => e.stopPropagation()}>
      
      <div className='session-form'>
        
          <form onSubmit={this.handleSubmit} className="modal-form">
            <div className="login-form">
              <h1 id="greeting">{this.props.greeting}</h1>
              <p id="tagline">{this.props.tagline}</p>
            
              
              <label className='input-label'>Email address
                <input type="text" value={this.state.email} onChange={this.update('email')}
                className={this.getClassName('Email')}
                />
              </label>
              <div className="err-div">
                {this.renderEmailErrors()}
              </div>
              
              {this.renderUsername()}

              <label className='input-label'>Password
                <input type="password" value={this.state.password} onChange={this.update('password')} 
                className={this.getClassName('Password')}/>
              </label>

              <div className="err-div">
                {this.renderPasswordErrors()}
              </div>
                
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
      </div>
    </div>
    )}}

export default withRouter(SessionForm);