import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';

const middleware = [thunk, logger];

// Run the Redux DevTools Extension
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));

export default store;
