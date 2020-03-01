import React from "react";
import { SignIn, Authenticator } from "aws-amplify-react";
import config from "../aws-exports";
import { CustomSignIn } from "./Login";

class AppWithAuth extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <Authenticator hide={[SignIn]} amplifyConfig={config}>
          <CustomSignIn />
        </Authenticator>
      </div>
    );
  }
}

export default AppWithAuth;
