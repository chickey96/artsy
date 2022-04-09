import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { email: '', username: '', password: '' };
    this.filterErrors = this.filterErrors.bind(this);
    this.className = this.className.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginDemoUser = this.loginDemoUser.bind(this);
    this.check = this.check.bind(this)
    this.exit = this.exit.bind(this);
    this.switchSession = this.switchSession.bind(this);

    this.altAction = 'Register';
    this.altPath = '/signup';

    if (this.props.formType == 'Register') {
      this.altAction = 'Sign In';
      this.altPath = '/login';
    }
  }

  filterErrors(keywords) {
    if (keywords.length == 1) {
      return this.props.errors.filter(error => (
        error.includes(keywords[0])
      ))[0];
    }

    return this.props.errors.filter(error => (
        error.includes(keywords[0]) || error.includes(keywords[1])
    ))[0];
  }

  switchSession(){
    this.props.clearErrors();
  }

  //clear errors and return to original page when exiting modal
  exit() {
    this.props.clearErrors();
    const currPath = this.props.history.location.pathname;

    if (currPath == '/') {
      this.props.history.replace(`/users/${this.props.currentUser.id}`);
      return;
    }

    const splitUrl = currPath.split('/');
    let newUrl = splitUrl.slice(0, splitUrl.length-1).join("/");
    this.props.history.replace(newUrl);
  }

  //determine whether modal input should be red due to errors
  className(inputName){
    let keywords = [inputName];

    if (inputName === 'Email' || inputName === 'Password'){
      keywords.push('credentials')
    }

    const err = this.filterErrors(keywords);

    if (err) return 'input-error';

    return 'modal-input';
  }

  //close modal if login was successful
  check(){
    if(this.props.currentUser) this.exit()
  }

  handleSubmit(e){
    e.preventDefault();

    this.props.clearErrors();
    const user = Object.assign({}, this.state);
    this.props.action(user).then( () => this.check());
  }

  update(field){
    return (e) => this.setState({ [field]: e.target.value });
  }

  loginDemoUser(e){
    e.preventDefault();

    this.props.demoAction({
      email: "zglass@salinger.com",
      password: "whentheFatLadysings"
    });

    this.exit();
  }

  renderErrors(errorType) {
    return (
      <div className="errors"> {this.filterErrors(errorType)} </div>
    );
  }

  renderUsername() {
    if (this.props.formType === 'Sign in') return null;

    return (
      <div className="username-div">
        <label className='input-label' >First name
          <input onChange={this.update('username')}
                 value={this.state.username}
                 className={this.className('Username')}/>
        </label>

        <div className="err-div">
          {this.renderErrors(['Username'])}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className='modal-background' onClick={this.exit}>
      {/* stop propagation prevents modal closing if user clicks inside */}
        <div className='modal-foreground' onClick={e => e.stopPropagation()}>
          <div className='session-form'>
            <form onSubmit={this.handleSubmit} className="modal-form">
              <div className="login-form">
                <div className="topline-session-modal">
                  <h1 id="greeting"> {this.props.greeting} </h1>
                  <button className="white button small expand">
                    <Link to={this.altPath} onClick={this.switchSession}     >
                      {this.altAction}
                    </Link>
                  </button>
                </div>

                <p id="tagline">{this.props.tagline}</p>

                <label className='input-label'>Email address
                  <input className={this.className('Email')}
                         value={this.state.email}
                         onChange={this.update('email')}/>
                </label>

                <div className="err-div">
                  {this.renderErrors(['Email', 'credentials'])}
                </div>

                {this.renderUsername()}

                <label className='input-label'>Password
                  <input type="password"
                         value={this.state.password}
                         onChange={this.update('password')}
                         className={this.className('Password')}/>
                </label>

                <div className="err-div">
                  {this.renderErrors(['Password', 'credentials'])}
                </div>

                <input className="black button large expand"
                       type="submit"
                       value={this.props.formType}/>

                <div className="modal-divider">
                  <span id="or-option"> OR </span>
                </div>

                <button onClick={this.loginDemoUser} 
                        className="white button large expand">
                  Demo
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);