import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, compose } from 'redux'   //needed to create Redux store
import thunk from 'redux-thunk'
import { Provider } from 'react-redux' //any component rapped in 'Provider' will have access to our redux store
import rootReducer from './redux/reducers/rootReducer';
import { BrowserRouter as Router} from "react-router-dom";
import './index.css';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)))     //store = global storage of data, reducers is responsible for taking in an 'action' object and deciding what we want to update in our store and then the reducer returns the new store

ReactDOM.render(
  //any child component wrapped inside of provider will have access to the Redux store. Store is passed as a 'prop' into the Provider component
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
