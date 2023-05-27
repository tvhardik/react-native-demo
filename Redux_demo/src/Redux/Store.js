import {createStore,combineReducers,applyMiddleware} from 'redux'; //Redux
import {ProductReducers} from './Reducers'; //myreducer
import thunk from 'redux-thunk';
const rootReducer = combineReducers({ProductReducers});
export const mystore = createStore(rootReducer,applyMiddleware(thunk)); //call to app.js
