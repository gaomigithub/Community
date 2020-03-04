import React from "react";
import { Authenticator } from "aws-amplify-react";
import TestApp from "./testcase";
import { Auth } from "aws-amplify";

export default function AppWithAuthenticator() {
  let signedIn = false;
  Auth.currentAuthenticatedUser()
    .then(() => {
      signedIn = true;
    })
    .catch(() => (signedIn = false));

  return <Authenticator>{signedIn ? <TestApp /> : null}</Authenticator>;
}
