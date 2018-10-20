import React, { Component } from 'react';
import './App.css';
import store from './store/';
import RepoSearch from './RepoSearch'
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';


class App extends Component {
  render() {
    return (
      <div className="App">

        <RepoSearch store={store}/>
      </div>
    );
  }
}

export default App;
