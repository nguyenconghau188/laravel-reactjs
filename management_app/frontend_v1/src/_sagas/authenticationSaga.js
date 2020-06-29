import { put, call } from "redux-saga/effects";
import authentication from '../_services/authentication.services';
import * as types from "../_constants/user.contants";

export function* loginSaga(payload) {
    try {
        const user = yield call(authentication.loginService, payload);
        yield put({
            type: types.LOGIN_SUCCESS,
            user
        });
    } catch (error) {
        yield put({
            type: types.LOGIN_ERROR,
            error
        });
    }
}