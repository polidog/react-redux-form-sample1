import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { combineForms } from 'react-redux-form';
import DevTools from '../containers/DevTools'

let createStoreWithMiddleware = compose(
  applyMiddleware(thunkMiddleware),
  DevTools.instrument()
)(createStore);

let reducers = combineForms({
    user: {
      name: "",
    }
});


export default function configureStore(initialState) {
  return createStoreWithMiddleware(reducers, initialState);
}