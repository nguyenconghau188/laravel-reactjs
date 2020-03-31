import * as menuTypes from '../constants/MenuTypes';
import { combineReducers } from 'redux';

const initState = {
  siderType: menuTypes.MENU_UNCOLLAPSED
}

function collapsedSider(state=initState, actions) {
  console.log(actions.type)
  switch (actions.type) {
    case menuTypes.MENU_COLLAPSED:
      state.type = menuTypes.MENU_COLLAPSED;
      return state;
    case menuTypes.MENU_UNCOLLAPSED:
      state.type = menuTypes.MENU_UNCOLLAPSED;
      return state;
    default:
      return state;
  }
}

const menuReducers = combineReducers({
  collapsedSider,
});

export default menuReducers;