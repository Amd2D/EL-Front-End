import {createStore,applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from "../Saggas/rootSagga"
import alltype from "../Reducers/combineReducer"

const sagaMiddleware = createSagaMiddleware()

export const store=createStore(alltype,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);