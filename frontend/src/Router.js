import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Signup from "./signup-page/Loginform";
import Test from "./Test";

const BasicRoute = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="signup-page/Loginform" component={Signup} />
      <Route exact path="/Test" component={Test} />
    </Switch>
  </HashRouter>
);

export default BasicRoute;
