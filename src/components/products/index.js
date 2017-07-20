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

    this.props.getProducts();
  }

  render () {
    const productsList = this.props.products.map(product => {
      return <li key={ product.id }><button type="button" onClick={ () => this.props.getProduct(product.id) }>{ product.details.name }</button></li>
    });
    
    let product = null;
    if (this.props.product && this.props.product.id) {
      product = <p>Name: { this.props.product.details.name }</p>
    } else {
      product = <p>No product selected</p>
    }

    return (
      <div>
        <h2>Products</h2>
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
