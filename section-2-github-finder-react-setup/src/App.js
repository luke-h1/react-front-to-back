import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';

class App extends Component {
  state = {
    users: [],
    user: {},
    loading: false,
    alert: null,
  };
  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   // runs when component mounts
  //   const API_URL = `https://api.github.com/users?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`;
  //   const res = await fetch(`${API_URL}`);
  //   const data = await res.json();
  //   this.setState({ users: data, loading: false });
  // }

  // search GH users with text query passed in
  searchUsers = async (text) => {
    this.setState({ loading: true });
    const API_URL = `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`;
    const res = await fetch(`${API_URL}`);
    const data = await res.json();
    this.setState({ users: data.items, loading: false });
  };

  //  get single GH user
  getUser = async (username) => {
    this.setState({ loading: true });
    const API_URL = `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`;
    const res = await fetch(`${API_URL}`);
    const data = await res.json();
    this.setState({ user: data, loading: false });
  };

  // clear users from state
  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };

  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 2000);
  };

  render() {
    const { users, user, loading } = this.state;
    return (
      <Router>
        <div className='App'>
          <Navbar />
          <div className='container'>
            <Alert alert={this.state.alert} />
            <Switch>
              <Route
                exact
                path='/'
                render={(props) => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                )}
              />
              <Route exact path='/about' component={About} />
              <Route
                exact
                path='/user/:login'
                render={(props) => (
                  <User {...props} getUser={this.getUser} user={user} loading={loading} />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;