import * as productsService from '../services/productsService';

function getProducts() {
  console.log('ACTION:', 'getProducts');
  return (dispatch) => {
    dispatch({ type: 'getProducts'});
    productsService.getProducts()
      .then(products => dispatch({ type: 'getProductsSuccess', payload: products}))
      .catch(error => dispatch({ type: 'getProductsError', payload: error}));
  };
}

function getProduct(id) {
  console.log('ACTION:', 'getProduct', id);
  return (dispatch) => {
    dispatch({ type: 'getProduct', payload: id });
    productsService.getProduct(id)
      .then(product => dispatch({ type: 'getProductSuccess', payload: product }))
      .catch(error => dispatch({ type: 'getProductError', payload: error }));
  };
}

export { getProducts, getProduct }
