import React from "react";
import "./styles/App.css";
// import { withAuthenticator } from "aws-amplify-react";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import Main from "./components/main";
import Header from "./components/header";
import Nav from "./components/nav";
import Navigator from "./components/Navigator";
Amplify.configure(awsconfig);

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    if (this.props.authState == "signedIn") {
      return (
        <div className="container">
          <Navigator />
          <Header />
          <Main />
        </div>
      );
    } else {
      return (
        <div>
          <Navigator />
          <Header />
        </div>
      );
    }
  }
}

export default App;
// export default withAuthenticator(App, true);
