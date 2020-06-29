import * as types from '../_constants/user.contants';

let user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : false;
let error = {};
const initialState = user ? { isLogin: true, user, error} : {};

export default function(state=initialState, action) {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                isLogin: true,
                user: action.user
            };
        case types.LOGIN_ERROR:
            return {
                ...state,
                isLogin: false,
                error: action.error
            };
        default:
            return state;
    }
}