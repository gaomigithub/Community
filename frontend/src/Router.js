import React from "react";
import { HashRouter, Route, Switch, BrowserRouter } from "react-router-dom";
import App from "./App";
import Signup from "./signup-page/Loginform";
import Report from "./signup-page/Signup-report";

const BasicRoute = () => (
  <HashRouter history={BrowserRouter}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/signup-page/Loginform" component={Signup} />
      <Route exact path="/signup-page/Signup-report" component={Report} />
    </Switch>
  </HashRouter>
);

export default BasicRoute;
