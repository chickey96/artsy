import React from 'react';
import { MdSearch } from 'react-icons/md'

class Search extends React.Component {

  constructor(props){
    super(props);
    this.state = { query: "" }
    this.handleSearch = this.handleSearch.bind(this)
    this.update = this.update.bind(this);
    this.clearSearch = this.clearSearch.bind(this)
    this.checkClear = this.checkClear.bind(this)
    //clear search bar contents when user navigates to a new link
    window.addEventListener('click', this.checkClear)
  }

  handleSearch(e){
    e.preventDefault();
    e.target.previousElementSibling.blur();
    this.props.clearProducts();
    this.props.searchProducts(this.state.query)
    .then(this.props.history.replace(`/search/${this.state.query}`))
  }

  update(){
    return(e) => this.setState({ query: e.target.value})
  }

  clearSearch(){
    this.setState({ query: "" })
  }

  checkClear(){
    const currUrl = this.props.location.pathname;
    if(!currUrl.includes('search')) {
      this.clearSearch()
    }
  }

  render(){
    return(
      <form onSubmit={this.handleSearch} className="options-bar-item" id="search-form">
        <input type="input" className="search-input" placeholder="Search for items or artists"
          onChange={this.update()} value={this.state.query}
          onFocus={this.clearSearch}
          />
        <button className="search-button" onClick={this.handleSearch}>
          <MdSearch/>
        </button>
      </form>
    )
  }
}

export default Search;