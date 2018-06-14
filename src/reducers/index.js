import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PricesReducer from './reducer_prices';

const rootReducer = combineReducers({
  prices: PricesReducer,
  form: formReducer
});

export default rootReducer;
