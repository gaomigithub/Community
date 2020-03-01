import React from "react";
import "../styles/App.css";
import Body from "./Body";
import Header from "./Header";
import Navigator from "./Navigator";

class Landing extends React.Component {

  handleAuthStateChange(state) {
    if (state === "signedIn") {
      /* Do something when the user has signed-in */
    }
  }

  render() {
    if (this.props.authState === "signedIn") {
      return (
        <div>
          <Navigator />
          <Header />
          <Body />
        </div>
      );
    } else {
      return (
        <div>
          <Navigator />
          <Header />
        </div>
      );
    }
  }
}

export default Landing;
