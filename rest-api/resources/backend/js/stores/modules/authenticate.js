import { createAction, handleActions } from 'redux-actions';
import { put, call, takeLatest } from 'redux-saga/effects';
import { fromJS } from 'immutable';
import axios from '../../utils/axios';
import handleResponse from '../../utils/handle-response';
import history from '../../components/routes/history';
import { WindowsFilled } from '@ant-design/icons';

//action types
export const REGISTER = 'authenticate/REGISTER';
export const LOGIN = 'authenticate/LOGIN';
export const LOGIN_SUCCESSFULLY = 'authenticate/LOGIN_SUCCSESSFULLY';

//action creators
export const register = createAction(REGISTER);
export const login = createAction(LOGIN);
export const loginSuccessfully = createAction(LOGIN_SUCCESSFULLY);

//reducer
const authenticateInitialState = fromJS({
  currentUser: window.globalThis.user || {},
});

const setLoginUser = (state, action) => state.setIn(['currentUser'], fromJS(action.payload));

export default handleActions({
  [LOGIN_SUCCESSFULLY]: setLoginUser,
}, authenticateInitialState);

//selectors
export const getAuthenticate = state => state.get('authenticate');
export const getCurrentUser = state => getAuthenticate(state).get('currentUser');

//sagas
export function* authenticateSagas() {
  yield takeLatest(register, onRegister);
  yield takeLatest(login, onLogin);
}

export function* onRegister(action) {
  const response = yield call(onRegisterApi, action.payload);
  handleResponse(response);
}

export function* onLogin(action) {
  const response = yield call(onLoginApi, action.payload);

  if (response.status === 200) {
    const {data} = response.data;
    yield put(loginSuccessfully(data));
    handleResponse(response);
    history.push('/');
    
    return;
  }

  handleResponse(response);
}

//Apis
function onRegisterApi(data) {
  const url = '/api/register';

  return axios.post(url, data)
    .then(response => response)
    .catch(error => error.response);
}

function onLoginApi(data) {
  const url = '/api/login';

  return axios.post(url, data)
    .then(response => response)
    .catch(error => error.response);
}