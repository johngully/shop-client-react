const products = [{id: "1", name: "Product 1"}, {id: "2", name: "Product 2"}];
const defaultState = {
  products: [],
  product: null
}

const productsReducer = (state = defaultState, action) => {
  console.log('REDUCER:', 'productsReducer', 'ACTION:', action);
  switch (action.type) {
    case 'getProducts':
      return Object.assign({}, state, {
        products: [...products],
      });
    case 'getProduct':
      const product = state.products.find(product => product.id === action.payload);
      return Object.assign({}, state, { product });
    default:
      return state;
  }
}

export default productsReducer;
