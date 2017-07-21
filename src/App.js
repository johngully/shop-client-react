import React, { Component } from 'react';
import { Route } from 'react-router'
import Products from './components/products';
import Product from './components/product';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Products}></Route>
        <Route exact path="/product/:id" component={Product}></Route>
      </div>
    );
  }
}

export default App;
