import React from "react";
import "../styles/App.css";
import Main from "./main";
import Header from "./header";
import Nav from "./nav";
import Navigator from "./Navigator";
import App from "../App";

class Landing extends React.Component {
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

export default Landing;
// export default withAuthenticator(App, true);
