import * as types from '../constants/taskTypes';
import { toastError } from '../helpers/toastHelper';

const initialState = {
    listTask: [],
};

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_TASK:
            return {
                ...state,
                listTask: []
            };
        case types.FETCH_TASK_SUCCESS:
            const { data } = action.payload;
            return {
                ...state,
                listTask: data,
            };
        case types.FETCH_TASK_ERROR:
            const { error } = action.payload;
            toastError(error);
            return {
                ...state,
                listTask: [],
                error
            };
        default:
            return state;
    }
};

export default taskReducer;