import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Signup from "./signup-page/Loginform";

const BasicRoute = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="signup-page/Loginform" component={Signup} />
    </Switch>
  </HashRouter>
);

export default BasicRoute;
