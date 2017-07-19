const getProducts = () => {
  console.log('ACTION', 'getProducts');
  return {
    type: 'getProducts'
  }
}

const getProduct = (id) => {
  console.log('ACTION', 'getProduct', id);
  return {
    type: 'getProduct',
    payload: id
  }
}

export { getProducts, getProduct }
