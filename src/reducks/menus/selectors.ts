import { createSelector } from "reselect";
import {StoreState} from './types';

declare module 'react-redux' {
  interface DefaultRootState extends StoreState {}
}

const menusSelector = (state: StoreState) => state.menus;

export const getCloseDate = createSelector(
  [menusSelector],
  (state) => state.date
);

export const getDateMenu = createSelector(
  [menusSelector],
  (state) => state.fitItems
);

export const getPartsId = createSelector(
  [menusSelector],
  (state) => state.partsId
);
