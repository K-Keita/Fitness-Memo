import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import {History} from 'history';

import { UsersReducer } from "../users/reducers";
import { MenusReducer } from "../menus/reducers";

export default function createStore(history: History) {
  return reduxCreateStore(
    combineReducers({
      menus: MenusReducer,
      router: connectRouter(history),
      users: UsersReducer,
    }),
    applyMiddleware(routerMiddleware(history), thunk)
  );
}
