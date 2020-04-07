import { all, fork } from 'redux-saga/effects';
import { authenticateSagas } from './modules/authenticate'

export default function* rootSaga() {
  yield all([
    fork(authenticateSagas)
  ]);
}