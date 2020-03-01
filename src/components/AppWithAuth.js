import React from "react";
import { SignIn, Authenticator } from "aws-amplify-react";
import config from "../aws-exports";
import Report from "./test-report";

class AppWithAuth extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <Authenticator>
          <Report />
        </Authenticator>
      </div>
    );
  }
}

export default AppWithAuth;
