import * as types from '../constants/ActionTypes';

const initState = [{
  text: 'user redux',
  marked: false,
  id: 0
}]

export default function todos(state = initState, action) {
  switch(action.type) {
    case types.ADD_TODO:
      return [{
        id: (state.length === 0) ? 0 : (state.length - 1),
        text: action.text,
        marked: false
      }, ...state];
    case types.DELETE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    case types.EDIT_TODO:
      return state.map((todo) => todo.id === action.id ? {...todo, text: action.text} : todo);
    case types.MARK_TODO:
      return state.map((todo) => todo.id === action.id ? {...todo, marked: true} : todo);
    case types.MARK_ALL:
      const areAllMarked = state.every((todo) => todo.marked);
      return state.map((todo) => ({...todo, marked: !areAllMarked}));
    case types.CLEAR_MARKED:
      return state.map((todo) => ({...todo, marked: false}));
    default:
      return state;
  }
}