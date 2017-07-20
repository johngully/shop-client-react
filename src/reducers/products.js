const defaultState = {
  products: [],
  product: null
}

const productsReducer = (state = defaultState, action) => {
  console.log('REDUCER:', 'productsReducer', 'ACTION:', action);

  switch (action.type) {
    case 'getProducts':
      return state;
    case 'getProductsSuccess':
      return Object.assign({}, state, { products: [...action.payload] });
    case 'getProductsError':
      console.error('Error getting products', action.payload);
      return state;

    case 'getProduct':
      return state;
    case 'getProductSuccess':
      return Object.assign({}, state, { product: action.payload });
    case 'getProductError':
      console.error('Error getting product', action.payload);
      return state;

    default:
      return state;
  }
}

export default productsReducer;
