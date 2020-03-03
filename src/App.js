import React from "react";
import Amplify from "aws-amplify";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/Landing";
import AppWithAuthenticator from "./components/AppWithAuth";
import About from "./components/About";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import SignUp from "./components/SignUp";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

export default function App() {
  return (
    <div>
      <NavigationBar />
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        {/* Planned to be changed to user profile in this component */}
        <Route path="/profile">
          <SignUp />
        </Route>
        <Route path="/AppWithAuth">
          <AppWithAuthenticator />
        </Route>
        <Route path="/login">
          <AppWithAuthenticator />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}
