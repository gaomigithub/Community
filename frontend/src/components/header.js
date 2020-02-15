import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Router, Route, Link } from "react-router";
// import Loginform from "../signup-page/Loginform";

class Header extends Component {
  render() {
    return (
      <header>
        <h1>Community</h1>
        <p>Impacting Backbay & SouthEnd resident lives</p>
        <div>
          <Button type="button" onclick={this.signup}>
            Sign Up Here!
          </Button>
        </div>
        <div>
          <Button type="button" onclick={this.login}>
            Login
          </Button>
        </div>
        <img src="./assets/backbaypark.png" />
      </header>
    );
  }
}

export default Header;
