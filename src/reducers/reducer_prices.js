import _ from 'lodash';
import { FETCH_PRICES, FETCH_PRICE, DELETE_PRICE } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
  case DELETE_PRICE:
    return _.omit(state, action.payload);
  case FETCH_PRICE:
    // const post = action.payload.data;
    // const newState = {...state };
    // newState[post.id] = post;
    // return newState;

    return { ...state, [action.payload.data.id]: action.payload.data };
  case FETCH_PRICES:
    return _.mapKeys(action.payload.data, 'id');
  default:
    return state;
  }
}
