import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/navbar';
import Users from './components/users/Users';

class App extends Component {
  state = {
    users: [],
    loading: false,
  };
  async componentDidMount() {
    this.setState({ loading: true });
    // runs when component mounts
    const API_URL = `https://api.github.com/users`;
    const res = await fetch(`${API_URL}`);
    const data = await res.json();
    this.setState({ users: data, loading: false });
  }
  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}
export default App;
