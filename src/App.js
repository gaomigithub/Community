import React from "react";
import "./styles/App.css";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator } from "aws-amplify-react"; // or 'aws-amplify-react-native';
import Main from "./components/main";
import Header from "./components/header";
import Nav from "./components/nav";

Amplify.configure(awsconfig);
function App() {
  return (
    <div className="container">
      <Nav />
      <Header />
      <Main />
    </div>
  );
}

export default withAuthenticator(App, true, null);
