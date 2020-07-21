import { fork, take, call, put } from "redux-saga/effects";

import * as taskTypes from '../constants/taskTypes';
import { getList } from "../apis/task";
import { STATUS_CODE } from "../constants/index";
import { fetchTaskSuccess, fetchTaskError } from '../actions/task';

function* watchingFetchListTaskAction() {
    while (true) {
        yield take(taskTypes.FETCH_TASK);
        const resp = yield call(getList);
        const { status, data } = resp;
        if (status === STATUS_CODE.SUCCESS) {
            yield put(fetchTaskSuccess(data));
        } else {
            yield put(fetchTaskError(data));
        }
    }
}

function* rootSaga() {
    yield fork(watchingFetchListTaskAction);
}

export default rootSaga;