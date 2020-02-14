import React, { Component } from "react";
class Header extends Component {
  render() {
    return (
      <header>
        <h1>Community</h1>
        <p>Impacting Backbay & SouthEnd resident lives</p>

        <div>
          <button type="button">Sign Up Here!</button>
        </div>
        <div>
          <button type="button">Login</button>
        </div>
        <img src="./assets/backbaypark.png" />
      </header>
    );
  }
}

export default Header;
