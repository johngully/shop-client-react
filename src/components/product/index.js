import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as productsActions from '../../actions/products';

class Product extends Component {
  constructor (props) {
    super(props);
    this.state = {
      productsState: {
        product: null
      }
    }
  }

  componentWillMount() {
    const id = this.props.match.params.id;
    this.props.getProduct(id);
  }

  render () {
    console.log("RENDER:", this.props)

    return (
      <div>
        <h2>Product</h2>
        <p>Name: { this.props.product ? this.props.product.details.name : '' }</p>
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
)(Product);
