import React        from 'react';
import { render }   from 'react-dom';

import * as files from './files';

import { Router, browserHistory } from 'react-router';
import routes from './routes';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

function reducer(state = [], action) {
  switch(action.type) {
    case 'LOAD_DATA':
      return [
        ...state,
        action.text
      ];
  }
}

const store = createStore(reducer, [ 'Use Redux' ]);

store.subscribe(() => {
  console.log(store.getState());
});

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
