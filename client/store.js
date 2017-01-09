import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import * as reducers from './modules';
import thunkMiddleware from 'redux-thunk';


const composeEnhancers = process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  combineReducers(reducers),
  {},
  composeEnhancers(applyMiddleware(thunkMiddleware))
);
