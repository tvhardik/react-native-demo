import {createStore, combineReducers, applyMiddleware} from 'redux';
import {ProductReducers} from './Reducers';
import thunk from 'redux-thunk';
const rootReducer = combineReducers({ProductReducers});
export const mystore = createStore(rootReducer, applyMiddleware(thunk));
