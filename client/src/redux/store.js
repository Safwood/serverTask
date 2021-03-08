import { createStore, applyMiddleware } from "redux";
import  rootReducer  from "./reducers";
import createSagaMiddleware from "redux-saga";
import  rootSaga from "./sagas/rootSaga";
import {composeWithDevTools} from 'redux-devtools-extension';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware()

const store = createStore(persistedReducer, {}, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga)

const persistor = persistStore(store);

export {store, persistor};