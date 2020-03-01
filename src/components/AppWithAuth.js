import React from "react";
import { SignIn, Authenticator } from "aws-amplify-react";
import config from "../aws-exports";
import Login from "./Login";

class AppWithAuth extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <Authenticator hide={[SignIn]} amplifyConfig={config}>
          <Login />
        </Authenticator>
      </div>
    );
  }
}

export default AppWithAuth;
