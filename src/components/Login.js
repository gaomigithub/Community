/* eslint-disable no-unused-expressions */
import React, { Component } from "react";

import { Authenticator, SignIn } from "aws-amplify-react";

class MyCustomSignUp extends Component {
  constructor() {
    super();
    this.gotoSignIn = this.gotoSignIn.bind(this);
  }

  gotoSignIn() {
    // to switch the authState to 'signIn'
    this.props.onStateChange("signIn", {});
  }

  render() {
    return (
      <div>
        {/* only render this component when the authState is 'signUp' */}
        {this.props.authState === "signUp" && (
          <div>
            My Custom SignUp Component
            <button onClick={this.gotoSignIn}>Goto SignIn</button>
          </div>
        )}
      </div>
    );
  }
}

export default class Login extends Component {
  render() {
    return (
      <Authenticator
        // Optionally hard-code an initial state
        authState="signIn"
        // Fired when Authentication State changes
        onStateChange={authState => console.log(authState)}
        // A theme object to override the UI / styling
        // theme={myCustomTheme}
        // or hide all the default components
        hideDefault={true}
      >
        <SignIn />
        {/* The override prop tells the Authenticator that the SignUp component is not hidden but overridden */}
        <MyCustomSignUp override={"SignUp"} />
      </Authenticator>
    );
  }
}
