import {createStore, combineReducers, applyMiddleware} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import {ProductReducers} from './Reducers';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';

const rootReducer = combineReducers({ProductReducers});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);
export {store, persistor};
