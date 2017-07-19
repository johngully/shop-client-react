import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as productsActions from '../../actions/products';
// import ProductsList from './products-list';\

class Products extends Component {
  constructor (props) {
    super(props);
    this.state = {
      productsState: {
        products: [],
        product: null
      }
    }
  }

  render () {
    const productsList = this.props.products.map(product => {
      return <li key={ product.id }>{ product.name }</li>
    });


    console.log("RENDER:", this.props)
    let product = null;
    if (this.props.product && this.props.product.id) {
      product = <p>Name: { this.props.product.name }</p>
    } else {
      product = <p>No product selected</p>
    }

    return (
      <div>
        <h2>Products</h2>
        <button type="button" onClick={ this.props.getProducts }>Get Products</button>
        <button type="button" onClick={ () => this.props.getProduct('2') }>Get Product 2</button>
        <ul>{ productsList }</ul>
        <h1>Product</h1>
        { product }
      </div>
    );
  }
}

function mapStateToProps (state, props) {
  return {
    ...state.productsState
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    ...productsActions
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
