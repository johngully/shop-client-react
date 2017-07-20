import React, { Component } from 'react';
import { Route } from 'react-router'
import logo from './logo.svg';
import './App.css';
import Products from './components/products';
import Product from './components/product';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Route exact path="/" component={Products}></Route>
        <Route exact path="/product/:id" component={Product}></Route>
      </div>
    );
  }
}

export default App;
