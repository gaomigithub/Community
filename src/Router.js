import React from "react";
import { HashRouter, Route, Switch, BrowserRouter } from "react-router-dom";
import App from "./App";
import Signup from "./components/signup";
import Report from "./components/signup-report";

const BasicRoute = () => (
  <HashRouter history={BrowserRouter}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/signup-report" component={Report} />
    </Switch>
  </HashRouter>
);

export default BasicRoute;
