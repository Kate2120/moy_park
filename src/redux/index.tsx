import React from "react";
import ReactDOM from "react-dom";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { modalReduser } from "./redusers/modalReducer";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./sagas";


const sagaMiddleware = createSagaMiddleware()



const rootReducer = combineReducers({
  modalReduser,
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
    