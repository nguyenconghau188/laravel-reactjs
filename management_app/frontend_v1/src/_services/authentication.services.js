import * as config from '../_constants/config';
import history from "../_common/history";
const authenticationServices = {
    loginService,
    logoutService,
};

function loginService(request) {
    const { username, password } = request.user;
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };
    return fetch(`${config.API_ENDPOINT}/authentication/login`, requestOptions)
        .then(handleResponse)
        .then(data => {
            localStorage.setItem('user', JSON.stringify(data.user));
            history.push({pathname: '/admin'});
            return data.user;
        });
}

function logoutService() {
    localStorage.removeItem('user');
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                logoutService();
                window.location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}

export default authenticationServices;

