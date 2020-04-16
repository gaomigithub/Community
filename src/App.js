import React, { useEffect, useState } from "react";
import Amplify from "aws-amplify";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/Landing";
import AppWithAuthenticator from "./components/AppWithAuth";
import ResultReport from "./components/ProfileForm/resultReport";
import About from "./components/About";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import MainProfile from "./components/profile";
import awsconfig from "./aws-exports";
import { signIn, signOut } from "./store/actions/authentication";
import "./styles/App.css";
import { Auth, Hub } from "aws-amplify";
// Test pages only
import Reservation from "./components/Reservation/reservation";
import CheckInFunctionTesting from "./Templets-CheckInFunction";
import MapContainer from "./components/CheckIn/MapContainer";

Amplify.configure(awsconfig);

export default function App() {
  return (
    <div>
      <CheckInFunctionTesting />
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
          <AppWithAuthenticator />
        </Route>
        <Route path="/AppWithAuth">
          <AppWithAuthenticator />
        </Route>
        <Route path="/result-report">
          <ResultReport />
        </Route>
        <Route path="/login">
          <AppWithAuthenticator />
        </Route>
        <Route path="/reservation">
          <Reservation />
        </Route>
        <Route path="/parks">
          <MapContainer />
        </Route>
        {/* Test pages below only */}
      </Switch>
      <Footer>
        <ul>
          <li>
            <a href="/"> &copy; Community</a>
          </li>
          <li>
            <a href="/">Terms of Use</a>
          </li>
          <li>
            <a href="/">Privacy Policy</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
        </ul>
      </Footer>
    </div>
  );
}
