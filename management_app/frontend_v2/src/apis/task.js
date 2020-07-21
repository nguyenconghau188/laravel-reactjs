import axiosService from '../commons/axiosService';
import { API_ENDPOINT } from "../constants/index";

const url = 'api/tasks';

export const getList = () => {
    return axiosService.get(`${API_ENDPOINT}/${url}`);
};