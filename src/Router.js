import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import App from "./App";
import Signup from "./components/signup";
import Report from "./components/test-report";
import AppWithAuth from "./components/AppWithAuth";
import Login from "./components/Login";

const BasicRoute = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/test-report" component={Report} />
      <Route exact path="/AppWithAuth" component={AppWithAuth} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/" component={App} />
    </Switch>
  </BrowserRouter>
);

export default BasicRoute;
