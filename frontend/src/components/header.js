import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <header>
        <h1>Community</h1>
        <p>Impacting Backbay & SouthEnd resident lives</p>
        <div>
          <Button type="button">Sign Up Here!</Button>
        </div>
        <div>
          <Button type="button">Login</Button>
        </div>
        <img src="./assets/backbaypark.png" />
      </header>
    );
  }
}

export default Header;
