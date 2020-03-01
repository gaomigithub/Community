import React from "react";
import Landing from "./components/Landing";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);

export default class App extends React.Component {
  render() {
    return <Landing />;
  }
}
