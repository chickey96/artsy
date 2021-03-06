import React from 'react';
import { Link } from 'react-router-dom';
import SearchContainer from '../search/searchContainer'

class NavBar extends React.Component{
  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.modal = document.getElementsByClassName("profile-modal");
    this.modalOverlay = document.getElementsByClassName("modal-overlay");
    this.handleSignup = this.handleSignup.bind(this);
    this.openProfileDropdownModal = this.openProfileDropdownModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.closeProfileModal = this.closeProfileModal.bind(this)
    this.toUserShow = this.toUserShow.bind(this)
    const currentUser = this.props.currentUser || { id: null, username: null }
    this.state = { currentUser }
  }

  handleLogout(e) {
    e.preventDefault();
    let currPath = this.props.history.location.pathname;
    this.props.logout();
    this.props.history.replace(currPath);
  }

  handleLogin(e){
    e.preventDefault();
    let currPath = this.props.history.location.pathname;
    if(currPath === '/') currPath = ""
    this.props.history.push(`${currPath}/login`);
  }

  handleSignup(e){
    e.preventDefault();
    let currPath = this.props.history.location.pathname;
    if (currPath === '/') currPath = ""
    this.props.history.push(`${currPath}/signup`)
  }

  openProfileDropdownModal(e){
    e.preventDefault();
    this.modal[0].classList.remove("hidden");
    this.modalOverlay[0].classList.remove("hidden");

    if(this.props.currentUser !== this.state.currentUser) {
      this.setState({currentUser: this.props.currentUser})
    }
  }

  hideModal(e){
    if (e.target != this.modalOverlay[0]) {
      return;
    }
   this.closeProfileModal();
  }

  toUserShow(e){
    this.props.history.push(`/users/${this.state.currentUser.id}`);
    this.closeProfileModal();
  }

  closeProfileModal(){
    this.modal[0].classList.add("hidden");
    this.modalOverlay[0].classList.add("hidden")
  }

  render(){
    const profileModal = (
      <div className="modal-overlay hidden" onMouseDown={this.hideModal}>
        <div className="profile-modal hidden">

          <button id="profile-link" onClick={this.toUserShow}>
            <div className="user-show-thumbnail"></div>

            <div className="modal-profile-text">
              <div className="modal-username">
                {this.state.currentUser.username}
              </div>
              <div className="modal-view-profile">
                <span id="view-profile-text">View Profile</span>
                <span id="view-profile-arrow">&#10095;</span>
              </div>
            </div>
          </button>

          <div id="logout-dropdown-bar">
            <button id="logout-button" onClick={this.handleLogout}>
              Sign out
            </button>
          </div>
        </div>
      </div>
    )

    const logoutTools = (
      <div className="options-bar-el" id="logout-cart-options">
        <button id="profile-button" onClick={this.openProfileDropdownModal}>
          <div className="profile-overlay">
            <div className="profile-hover">
              <div className="user-show-thumbnail"></div>
            </div>
          </div>
          <div className="navbar-profile-label">
            You <div>&#x25BC;</div>
          </div>
        </button>

        { profileModal }

        <div id="divider-line"></div>

        <Link className="cart-link" to="/cart">
          <div className="cart-image">&#x1F6D2;</div>
          <div className="nav-cart-label">Cart</div>
        </Link>
      </div>
    );

    const loginTools = (
      <div className="options-bar-el" id="login-options">
        <div id="register-div">
          <button className="options-bar-item"
                  id="register-button"
                  onClick={this.handleSignup}>
            Register
          </button>
        </div>

        <div id="login-div">
          <button className="options-bar-item"
                  id="login-button"
                  onClick={this.handleLogin}>
            Sign in
          </button>
        </div>
      </div>
    );

    const relevantButtons = (this.props.currentUser ? logoutTools : loginTools);

    return (
      <nav className="nav-bar">

        <div className="options-bar">

          <div className="options-bar-el" id="logo-search">
            <Link to="/" className="logo-link">
              <div className="options-bar-item" id="logo">
                Artsy
              </div>
            </Link>

            <div id="search">
              <SearchContainer/>
            </div>

          </div>
          {relevantButtons}
        </div>
      </nav>
    );
  }
}

export default NavBar;