import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as StoreProvider } from 'react-redux';

import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

ReactDOM.render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>,
  document.getElementById('root')
);

registerServiceWorker();
