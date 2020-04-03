import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// Import of thunk to admin the middleware. // 
import thunk from 'redux-thunk';

// Import of the reducers. //
import userReducer from './reducers/userReducer';
import dataReducer from './reducers/dataReducer';
import uiReducer from './reducers/uiReducer';

const initialState = {};

const middleware = [thunk];

// Container of the application state. //
const reducers = combineReducers({
  user: userReducer,
  data: dataReducer,
  UI: uiReducer
});

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));
const store = createStore(reducers, initialState, enhancer);

export default store;