import { combineReducers } from 'redux';
import todoReducers from './todoReducers';
import menuReducers from './menuReducers';

const rootReducers = combineReducers({
  todoReducers,
  menuReducers,
});

export default rootReducers;