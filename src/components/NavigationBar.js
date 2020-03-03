import React, { useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { SignOut } from "aws-amplify-react";
import { Auth, Hub } from "aws-amplify";
import { Button } from "react-bootstrap";

function checkUser() {
  Auth.currentAuthenticatedUser()
    .then(user => console.log({ user }))
    .catch(err => console.log(err));
}

function signOut() {
  Auth.signOut()
    .then(data => console.log(data))
    .catch(err => console.log(err));
}

export default function NavigationBar() {
  let location = useLocation();

  // in useEffect, we create the listener
  useEffect(() => {
    Hub.listen("auth", data => {
      const { payload } = data;
      console.log("A new auth event has happened: ", data);
      if (payload.event === "signIn") {
        console.log("a user has signed in!");
      }
      if (payload.event === "signOut") {
        console.log("a user has signed out!");
      }
    });
  }, []);

  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Navbar.Brand href="/">Community</Navbar.Brand>
      <Nav>
        <Nav.Item>
          <Nav.Link
            componentClass={Link}
            href="/"
            to="/"
            active={location.pathname === "/"}
          >
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            componentClass={Link}
            href="/about"
            to="/about"
            active={location.pathname === "/about"}
          >
            About
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            componentClass={Link}
            href="/login"
            to="/login"
            active={location.pathname === "/login"}
          >
            Login
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            componentClass={Link}
            href="signup"
            to="/signup"
            active={location.pathname === "/signup"}
          >
            Signup
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          {/* <button onClick={() => Auth.federatedSignIn()}>Sign In</button> */}
          <Navbar.Text>Greetings</Navbar.Text>
          <Button variant="success" onClick={signOut} className="ml-2">
            Sign Out
          </Button>
          <Button variant="success" onClick={checkUser} className="ml-2">
            Check User
          </Button>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}
