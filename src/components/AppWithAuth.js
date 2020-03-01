import React, { Component } from "react";
import { Authenticator, AuthPiece } from "aws-amplify-react";

class TestApp extends AuthPiece {
  constructor(props) {
    super(props);
    this._validAuthStates = ["signedIn"];
  }

  showComponent(theme) {
    return <div>!!!Nice!!!</div>;
  }
}

class AppWithAuthenticator extends Component {
  render() {
    return (
      <Authenticator>
      </Authenticator>
    );
  }
}

export default AppWithAuthenticator;
