import { combineReducers } from 'redux-immutable';
import { reducer as toastrReducer } from 'react-redux-toastr';
import authenticate from './modules/authenticate';

export default function rootReducer(asyncReducers) {
  return combineReducers({
    toastr: toastrReducer,
    authenticate,
    ...asyncReducers
  });
}