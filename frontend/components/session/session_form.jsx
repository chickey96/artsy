import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { username: '', password: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.createUser(user);
  }

  update(field){
    return (e) => {
      this.setState( { [field]: e.target.value } );
    };
  }

  render() {

    return (
      <div className='session-form'>
        
        <br></br>
        <form onSubmit={this.handleSubmite}>
          {this.props.formType} or {this.props.otherForm}
          <div onClick={this.props.closeModal}>X</div>
          <label>Username:
            <input type="text" 
            value={this.state.username}
            onChange={this.update('username')}/>
          </label>
          <br></br>
          <label>Password:
            <input type="password"
            value={this.state.password} 
            onChange={this.update('password')} />
          </label>
          <br></br>
          <input type="submit" value={this.formType}/>
          
        </form>
      </div>
    )
  }
}

export default withRouter(SessionForm);