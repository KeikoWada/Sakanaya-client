import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import PricesIndex from './components/prices_index';
import PricesNew from './components/prices_new';
import PricesShow from './components/prices_show';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/prices/new" component={PricesNew} />
          <Route path="/prices/:id" component={PricesShow} />
          <Route path="/" component={PricesIndex} />
          // <Route path="/" component={CategoriesIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
