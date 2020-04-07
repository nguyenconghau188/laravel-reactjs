import * as menuTypes from '../constants/MenuTypes';

export function collapsedSider() {
  return {
    type: menuTypes.MENU_COLLAPSED
  }
}

export function uncollapsedSider() {
  return {
    type: menuTypes.MENU_UNCOLLAPSED
  }
}