import 'babel-polyfill';
import { createStore, applyMiddleware, compose } from 'redux';
import createSageMiddleware, { END } from 'redux-saga';
import 'immutable';
import { fromJS } from 'immutable';

const sagaMiddleware = createSageMiddleware();

export default function configStore(initialState = {}, history, rootReducer) {
  const middleware = [
    sagaMiddleware
  ];

  const enhancers = [
    applyMiddleware(...middleware)
  ];

  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =  process.env.APP_ENV !== 'production' &&
                            typeof window === 'object' &&
                            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
                            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
  /* eslint-enable */

  const store = createStore(
    rootReducer(),
    fromJS(initialState),
    composeEnhancers(...enhancers)
  );

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);

  return store;
}