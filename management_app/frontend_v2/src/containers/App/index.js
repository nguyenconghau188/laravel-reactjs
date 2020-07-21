import React from 'react';
import { withStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import configStore from '../../redux/configStore';
import Taskboard from '../Taskboard/index.js';
import theme from '../../commons/Theme';
import styles from './styles.js';

const store = configStore();
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Taskboard />
          <ToastContainer />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default withStyles(styles)(App);
