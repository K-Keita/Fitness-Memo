import * as Actions from "./actions";
import initialState from "../store/initialState";
import {ActionType} from './types';

export const MenusReducer = (state = initialState.menus, action: ActionType) => {
  switch (action.type) {
    case Actions.FETCH_DAY_MENUS:
      return {
        ...state,
        ...action.payload,
      };
    case Actions.EMPTY_MENUS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
