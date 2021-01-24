import React, {FC} from "react";
import { Route, Switch } from "react-router";
import {
  RegistrationList,
  WeekLists,
  Home,
  EditMenuList,
  SignUp,
  SignIn,
  Reset,
  TestUserSign,
} from "./templates/index";
import Auth from "./Auth";

const Router: FC = () => {
  return (
    <Switch>
      <Route exact path={"/signup"} component={SignUp} />
      <Route exact path={"/signin"} component={SignIn} />
      <Route exact path={"/signin/reset"} component={Reset} />
      <Route exact path={"/signin/test"} component={TestUserSign} />
      <Auth>
        <Route exact path={"(/)?"} component={Home} />
        <Route exact path={"/list"} component={WeekLists} />
        <Route path={"/edit(/id)?"} component={EditMenuList} />
        <Route path={"/registration(/id)?"} component={RegistrationList} />
      </Auth>
    </Switch>
  );
};

export default Router;
