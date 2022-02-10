import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux' //any component rapped in 'Provider' will have access to our redux store
import rootReducer from './redux/reducers/rootReducer';
import { BrowserRouter as Router, Route } from "react-router-dom";

function saveToLocalStorage(state){
  try{
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch(e){
    console.log(e);
  }
}

function loadFromLocalStorage(){
  try{
    const serializedState = localStorage.getItem('state');
    if(serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch(e){
    console.log(e);
    return undefined;
  }
}

const persistedState = loadFromLocalStorage();

const store = createStore(rootReducer, persistedState,
  compose(
    applyMiddleware(thunk)
  ));

store.subscribe(() => saveToLocalStorage(store.getState()));


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
