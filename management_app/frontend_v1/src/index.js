import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AppContainer from './_container/AppContainer';
// import * as serviceWorker from './serviceWorker';
import configStore from "./_store/configStore";


const store = configStore();

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
