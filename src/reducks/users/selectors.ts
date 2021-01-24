import { createSelector } from "reselect";
import {StoreState} from './types';

const userSelector = (state: StoreState) => state.users;

declare module 'react-redux' {
  interface DefaultRootState extends StoreState {}
}

export const getIsSignedIn = createSelector(
  [userSelector],
  (state) => state.isSignedIn
);

export const getFitnessMenu = createSelector(
  [userSelector],
  (state) => state.fitMenus
);

export const getUserId = createSelector([userSelector], (state) => state.uid);

export const getUsername = createSelector(
  [userSelector],
  (state) => state.username
);
