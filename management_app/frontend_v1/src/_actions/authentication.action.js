import * as types from '../_constants/user.contants';

export const loginAction = (user) => {
    return {
        type: types.LOGIN_REQUEST,
        user
    };
};