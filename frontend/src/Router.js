import React from "react";
import { HashRouter, Route, Switch, BrowserRouter } from "react-router-dom";
import App from "./App";
import Signup from "./Loginform";
import Report from "./Signup-report";

const BasicRoute = () => (
  <HashRouter history={BrowserRouter}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/Loginform" component={Signup} />
      <Route exact path="/Signup-report" component={Report} />
    </Switch>
  </HashRouter>
);

export default BasicRoute;
