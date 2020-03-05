import React from "react";
import {
  Authenticator,
  AuthPiece,
  SignIn,
  SignUp,
  ConfirmSignUp,
  Greetings
} from "aws-amplify-react";
import MainProfile from "./profile";

class AppContent extends AuthPiece {
  constructor(props) {
    super(props);
    this._validAuthStates = ["signedIn"];
  }

  showComponent(theme) {
    return (
      <div>
        <MainProfile />
      </div>
    );
  }
}

class AppWithAuthenticator extends React.Component {
  render() {
    return (
      <Authenticator hideDefault={true}>
        <SignIn />
        <SignUp />
        <ConfirmSignUp />
        {/* <Greetings /> */}
        <AppContent />
      </Authenticator>
    );
  }
}

export default AppWithAuthenticator;
