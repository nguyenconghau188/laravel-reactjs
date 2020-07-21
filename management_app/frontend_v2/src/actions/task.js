import * as types from '../constants/taskTypes';
// import * as taskApi from '../apis/task';

export const fetchTaskRequest = () => {
    return {
        type: types.FETCH_TASK,
    };
};

export const fetchTaskSuccess = (data) => {
    const { tasks } = data;
    return {
        type: types.FETCH_TASK_SUCCESS,
        payload: {
            data: tasks,
        },
    };
};

export const fetchTaskError = (error) => {
    return {
        type: types.FETCH_TASK_ERROR,
        payload: {
            error,
        },
    };
};

// export const fetchListTask = () => {
//     return dispatch => {
//         dispatch(fetchTaskRequest());
//         taskApi.getList().then(data => {
//             dispatch(fetchTaskSuccess(data));
//         })
//         .catch(error => {
//             dispatch(fetchTaskError(error));
//         });
//     };
// };