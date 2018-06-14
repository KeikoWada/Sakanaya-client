import axios from 'axios';

export const FETCH_PRICES = 'fetch_prices';
export const FETCH_PRICE = 'fetch_price';
export const CREATE_PRICE = 'create_price';
export const DELETE_PRICE = 'delete_price';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=KEYIS1234';

export function fetchPrices() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_PRICES,
    payload: request
  };
}

export function createPrice(values, callback) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callback());

  return {
    type: CREATE_PRICE,
    payload: request
  };
}

export function fetchPrice(id) {
  const request = axios.get(`${ROOT_URL}/posts/${API_KEY}`);

  return {
    type: FETCH_PRICE,
    payload: request
  }
}

export function deletePrice(id, callback) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(() => callback());

  return{
    type: DELETE_PRICE,
    payload: id
  }
}
