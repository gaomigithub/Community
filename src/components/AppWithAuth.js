import React from "react";
import { Authenticator, AuthPiece } from "aws-amplify-react";
import TestApp from "./testcase";
import UserForm from "./ProfileForm/userform";
import ImageUpload from "./ProfileForm/userphoto";
import { Auth } from "aws-amplify";

// export default function AppWithAuthenticator() {
//   return <Authenticator></Authenticator>;
// }

class AppID extends AuthPiece {
  constructor(props) {
    super(props);
    this._validAuthStates = ["signedIn"];
  }

  showComponent(theme) {
    return (
      <div className="App">
        <ImageUpload />
        <UserForm />
      </div>
    );
  }
}

class AppWithAuthenticator extends React.Component {
  render() {
    return (
      <Authenticator>
        <AppID />
      </Authenticator>
    );
  }
}

export default AppWithAuthenticator;
