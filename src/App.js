import React from "react";
import "./styles/App.css";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import Main from "./components/main";
import Header from "./components/header";
import Nav from "./components/nav";
// Amplify.configure(awsconfig);

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    if (this.props.authState == "signedIn") {
      return (
        <div className="container">
          <Nav />
          <Header />
          <Main />
        </div>
      );
    } else {
      return (
        <div>
          <Nav />
          <Header />
        </div>
      );
    }
  }
}

export default App;
