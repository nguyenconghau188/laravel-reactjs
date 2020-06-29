import { fork } from "redux-saga/effects";
import watcherAuthentication from './watchers';

export default function* rootSaga() {
    yield fork(watcherAuthentication);
}