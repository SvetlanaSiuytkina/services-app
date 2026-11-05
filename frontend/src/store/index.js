import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { servicesListReducer, servicesDetailsReducer } from './reducers';
import { watchServices } from './sagas';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  servicesList: servicesListReducer,
  servicesDetails: servicesDetailsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchServices);