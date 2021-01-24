import {Users} from './types';

export const SIGN_IN = "SIGN_IN";
export const signInAction = (userState: Users) => {
  return {
    type: "SIGN_IN",
    payload: {
      isSignedIn: true,
      role: userState.role,
      uid: userState.uid,
      username: userState.username,
      fitMenus: userState.fitMenus,
    },
  };
};

export const SIGN_OUT = "SIGN_OUT";
export const signOutAction = () => {
  return {
    type: "SIGN_OUT",
    payload: {
      isSignedIn: false,
      role: "",
      uid: "",
      username: "",
      fitMemo: {},
    },
  };
};

export const FETCH_USERS = "FETCH_USERS";
export const fetchUsersAction = (data: Users) => {
  return {
    type: "FETCH_USERS",
    payload: data,
  };
};
