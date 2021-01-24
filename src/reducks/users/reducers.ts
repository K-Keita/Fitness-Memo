import * as Actions from "./actions";
import initialState from "../store/initialState";
import {ActionType} from './types';

export const UsersReducer = (state = initialState.users, action: ActionType) => {
  switch (action.type) {
    case Actions.SIGN_IN:
      return {
        ...state,
        ...action.payload,
      };
    case Actions.SIGN_OUT:
      return {
        ...action.payload,
      };
    case Actions.FETCH_USERS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
