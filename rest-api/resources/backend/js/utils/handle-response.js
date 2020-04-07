import { toastr } from 'react-redux-toastr';

function handleResponse(response) {
  switch (response.status) {
    case 200:
      toastr.success(response.data.message)
      break;
    case 422:
      const error = response.data[Object.keys(response.data)[1]];
      const message = error[Object.keys(error)[0]][0];
      toastr.error(message);
      break;
    case 400:
      if (typeof response.data.token != 'undefined') {
        window.axios.defaults.headers.common['X-CSRF-TOKEN'] = res.data.token;
      } else {
        toastr.error(typeof response.data == 'string' ? response.data : response.data[Object.keys(response.data)[0]]);
      }
      break;
    default:
      toastr.error(response.statusText ? response.statusText : response.data);
      break;
  }
} 

export default handleResponse;