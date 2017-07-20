const apiUrl = 'https://62mjnjf07k.execute-api.us-east-1.amazonaws.com/dev'

function getProducts(){
  return fetch(`${apiUrl}/products`)
    .then(response => response.json());
}

function getProduct(id) {
  return fetch(`${apiUrl}/product/${id}`)
    .then(response => response.json());
}

export { getProducts, getProduct };
