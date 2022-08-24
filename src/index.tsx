import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import createCache from '@emotion/cache';
import { CacheProvider } from "@emotion/react";

import { setupStore } from './redux/store';
import storage from './utils/localStorage';
import App from './App';

export const muiCache = createCache({
  'key': 'mui',
  'prepend': true,
});
  
const store = setupStore();

store.dispatch(storage.loadThemeState);

const root = ReactDOM.createRoot(
  document.getElementById('tictactoe') as HTMLElement
);
root.render(
  <React.StrictMode>
    <CacheProvider value={muiCache}>
      <Provider store={store}>
        <App />
      </Provider>
    </CacheProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
