import { takeLatest } from "redux-saga/effects";
import { loginSaga } from "./authenticationSaga";
import * as types from '../_constants/user.contants';

export default function* watcherAuthentication() {
    yield takeLatest(types.LOGIN_REQUEST, loginSaga);
}