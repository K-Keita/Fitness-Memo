import React, { FC, ReactNode, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listenAuthState } from "./reducks/users/operations";
import { getIsSignedIn } from "./reducks/users/selectors";

interface Props  {
  children: ReactNode;
};

const Auth: FC<Props> = ({children}) => {
  let id = window.location.pathname;

  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const isSignedIn = getIsSignedIn(selector);

  useEffect(() => {
    if (!isSignedIn) {
      dispatch(listenAuthState());
    }
  }, [dispatch, isSignedIn]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <>
    {isSignedIn ? (
      children
    ) : (
      <></>
    )}
    </>
  )
};

export default Auth;
