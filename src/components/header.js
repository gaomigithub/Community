/* global gapi */
import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isSignedIn: false };
    this.clickhandler = this.clickhandler.bind(this);
  }
  clickhandler() {
    this.props.history.push("../signup");
  }
  getContent() {
    if (this.state.isSignedIn) {
      return <p>hello user, you're signed in </p>;
    } else {
      return (
        <div>
          <p>You are not signed in. Click here to sign in.</p>
          <button id="loginButton">Login with Google</button>
        </div>
      );
    }
  }
  onSuccess() {
    this.setState({
      isSignedIn: true
    });
  }

  componentDidMount() {
    window.gapi.load("auth2", () => {
      this.auth2 = gapi.auth2.init({
        client_id:
          "444036602-8b0190fq2f7bjqgmdgrgjo7folpeg88s.apps.googleusercontent.com"
      });

      this.auth2.then(() => {
        this.setState({
          isSignedIn: this.auth2.isSignedIn.get()
        });
      });
    });
  }
  render() {
    return (
      <header>
        <h1>Community</h1>
        <h2>
          {" "}
          <p>Impacting Backbay & SouthEnd resident lives</p>
          <div>
            <Button type="button" onClick={this.clickhandler}>
              Sign Up Here!
            </Button>
          </div>
          <div>{this.getContent()}</div>
          <div>
            <Button type="button">Login</Button>
          </div>
        </h2>
        <img src="./assets/backbaypark.png" />
      </header>
    );
  }
}

export default withRouter(Header);
