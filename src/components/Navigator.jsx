import React, { Component } from "react";
import { Navbar, Nav, BSpan } from "bootstrap-4-react";
import { HashRouter, Route, Switch } from "react-router-dom";

const HomeItems = props => (
  <React.Fragment>
    <Nav.ItemLink href="#/" active>
      Home
      <BSpan srOnly>(current}</BSpan>
    </Nav.ItemLink>
    <Nav.ItemLink href="#/signup">Login</Nav.ItemLink>
  </React.Fragment>
);

const LoginItems = props => (
  <React.Fragment>
    <Nav.ItemLink href="#/">Home</Nav.ItemLink>
    <Nav.ItemLink href="#/signup" active>
      Login
      <BSpan srOnly>(current}</BSpan>
    </Nav.ItemLink>
  </React.Fragment>
);

export default class Navigator extends Component {
  render() {
    return (
      <Navbar expand="md" dark bg="#229954" fixed="top">
        <Navbar.Brand href="#">Community</Navbar.Brand>
        <Navbar.Toggler target="#navbarsExampleDefault" />

        <Navbar.Collapse id="navbarsExampleDefault">
          <Navbar.Nav mr="auto">
            <HashRouter>
              <Switch>
                <Route exact path="/" component={HomeItems} />
                <Route exact path="/signup" component={LoginItems} />
              </Switch>
            </HashRouter>
          </Navbar.Nav>
          <Navbar.Text>Greetings</Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
