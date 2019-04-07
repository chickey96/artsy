import React from 'react';

class Search extends React.Component {

  constructor(props){
    super(props);
    this.state = { query: "" }
    this.handleSearch = this.handleSearch.bind(this)
    this.update = this.update.bind(this);
    this.clearSearch = this.clearSearch.bind(this)
  }

  handleSearch(e){
    e.preventDefault();
    e.target.previousElementSibling.blur();
    this.props.searchProducts(this.state.query)
    .then(this.props.history.replace(`/search/${this.state.query}`))
  }

  update(){
    return(e) => this.setState({ query: e.target.value})
  }

  clearSearch(){
    this.setState({ query: "" })
  }

  render(){
    return(
      <form onSubmit={this.handleSearch} className="search-form">
        <input type="input" className="search-input" placeholder="Search for items or artists"
          onChange={this.update()} value={this.state.query}
          onFocus={this.clearSearch} 
          // onBlur={this.clearSearch}
          />
        <button className="search-button" onClick={this.handleSearch}>Search</button>
      </form>
    )
  }
}

export default Search;