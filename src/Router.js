import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import App from "./App";
import Signup from "./components/SignUp";
import AppWithAuth from "./components/AppWithAuth";
import Login from "./components/Login";

const BasicRoute = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/AppWithAuth" component={AppWithAuth} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/" component={App} />
    </Switch>
  </BrowserRouter>
);

export default BasicRoute;
