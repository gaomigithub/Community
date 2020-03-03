import React from "react";
import { Authenticator } from "aws-amplify-react";
import TestApp from "./testcase";

export default function AppWithAuthenticator() {
  return (
    <Authenticator>
      <TestApp />
    </Authenticator>
  );
}
