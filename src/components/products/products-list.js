import React, { Component } from 'react';

class ProductsList extends Component {
  constructor (props) {
    super(props);
    this.state = {
      products: []
    }
  }

  render() {
    const products =  this.state.products.map(product => {
      return <li>{ products.id } - { product.name }</li>
    });
    return (
      <div>
        <h1>Products</h1>
        <ul>{ products }</ul>
      </div>
    );
  }
}

export default ProductsList
