import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
  state = {
    text: ''
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({ text: '' });
  };

  onChange = e => this.setState({ text: e.target.value });

  render() {
    const { showClear, clearUsers } = this.props;

    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            placeholder='Search Users...'
            value={this.state.text}
            onChange={this.onChange}
          ></input>
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          ></input>
        </form>
        {showClear && (
          <button className='btn btn-light btn-block' onClick={clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;