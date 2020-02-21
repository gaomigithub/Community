import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.clickhandler = this.clickhandler.bind(this);
  }
  clickhandler() {
    console.log(this.props.history);
    this.props.history.push("../signup-page/Loginform");
  }
  render() {
    return (
      <header>
        <h1>Community</h1>
        <p>Impacting Backbay & SouthEnd resident lives</p>
        <div>
          <Button type="button" onClick={this.clickhandler}>
            Sign Up Here!
          </Button>
        </div>
        <div>
          <Button type="button">Login</Button>
        </div>
        <img src="./assets/backbaypark.png" />
      </header>
    );
  }
}

export default withRouter(Header);
