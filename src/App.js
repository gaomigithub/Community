import React from "react";
import Amplify from "aws-amplify";
import { Switch, Route } from "react-router-dom";

import AppWithAuth from "./components/AppWithAuth";
import Landing from "./components/Landing";
// import Login from "./components/Login";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import SignUp from "./components/signup";
import awsconfig from "./aws-exports";
import "bootstrap/dist/css/bootstrap.min.css";

Amplify.configure(awsconfig);

export default function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/about">hi</Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/AppWithAuth">
          <AppWithAuth />
        </Route>
        <Route path="/login" />
        {/* <Login /> */}
        <Route />
      </Switch>
      <Footer />
    </div>
  );
}
