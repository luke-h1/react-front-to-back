import React, { Component } from 'react';

export class Search extends Component {
  state = {
    text: '',
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchUsers(this.state.text); // get text and call method searchUsers in app.js. calling prop in searchUsers and passing in the text.
    this.setState({ text: '' }); // clear text state when submit
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }); // set name to whatever user passed in.
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            name='text'
            placeholder='Search Github users'
            value={this.state.text}
            onChange={this.onChange}
          />
          <input type='submit' className='btn btn-dark btn-block' />
        </form>
      </div>
    );
  }
}

export default Search;
