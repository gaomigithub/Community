import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);

    this.clickhandler = this.clickhandler.bind(this);
    this.clickhandler2 = this.clickhandler2.bind(this);
  }
  clickhandler() {
    this.props.history.push("../Login");
  }
  clickhandler2() {
    this.props.history.push("./signup");
  }

  render() {
    return (
      <header>
        <h1>Community</h1>
        <p>Impacting Backbay & SouthEnd resident lives</p>
        <div>
          <Button type="button" onClick={this.clickhandler}>
            Login
          </Button>
        </div>
        <div>
          <Button type="button" onClick={this.clickhandler2}>
            Sign Up Here!
          </Button>
        </div>

        <img src="./assets/backbaypark.png" />
      </header>
    );
  }
}

export default withRouter(Header);
