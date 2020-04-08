import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import 'antd/dist/antd.css';
import configStore from '../shared/configStore';
import rootReducer from '../stores/rootReducer';
import rootSaga from '../stores/rootSaga';
import Routes from './routes';

const initialState = {};
const history = createBrowserHistory();
const store = configStore(initialState, history, rootReducer);
store.runSaga(rootSaga);

const App = () => {
  <Provider store={store}>
    <Router history={history}>
      <Routes />
    </Router>
  </Provider>
}

ReactDOM.render(<App />, document.getElementById('root'));