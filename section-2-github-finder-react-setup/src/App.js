import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';

class App extends Component {
  state = {
    users: [],
    loading: false,
  };
  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   // runs when component mounts
  //   const API_URL = `https://api.github.com/users?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`;
  //   const res = await fetch(`${API_URL}`);
  //   const data = await res.json();
  //   this.setState({ users: data, loading: false });
  // }

  // search github users with text query passed in
  searchUsers = async (text) => {
    this.setState({ loading: true });
    const API_URL = `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`;
    const res = await fetch(`${API_URL}`);
    const data = await res.json();
    this.setState({ users: data.items, loading: false });
  };

  // clear users from state
  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };

  render() {
    const { users, loading } = this.state;
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
          />
          {/* set prop here to call  this.searchUsers in app.js when form is submitted ^ */}
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}
export default App;
