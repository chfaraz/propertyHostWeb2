import React from "react";
import SignIn from "./FormComponents/SignIn";
import SignUp from "./FormComponents/SignUp";
import EnterCode from "./FormComponents/EnterCode";
import NewPassword from "./FormComponents/NewPassword";
import ForgetPassword from "./FormComponents/ForgetPassword";
import { Route, Switch } from "react-router-dom";

function login() {
  return (
    <div className="sell-page">
      <Switch>
        <Route path="/login/" exact component={SignIn} />
        <Route path="/login/signUp" exact component={SignUp} />
        <Route path="/login/enterCode" exact component={EnterCode} />
        <Route path="/login/newPassword" exact component={NewPassword} />
        <Route path="/login/forgetPassword" exact component={ForgetPassword} />
      </Switch>
    </div>
  );
}
export default login;
