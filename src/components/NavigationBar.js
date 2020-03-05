import React, { useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import { Auth, Hub } from "aws-amplify";
import { Button } from "react-bootstrap";

// Function for check User
// function checkUser() {
//   Auth.currentAuthenticatedUser()
//     .then(user => console.log({ user }))
//     .catch(err => console.log(err));
// }

export default function NavigationBar() {
  let location = useLocation();
  let history = useHistory();
  function signIn() {
    history.push("/AppWithAuth");
  }
  function signOut() {
    history.push("/AppWithAuth");
    Auth.signOut()
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }

  // in useEffect, we create the listener
  useEffect(() => {
    Hub.listen("auth", data => {
      const { payload } = data;
      console.log("A new auth event has happened: ", data);
      var signout = document.getElementById("state_signout");
      var signin = document.getElementById("state_signin");
      // switch (payload.event) {
      //   case "signIn":
      //     signout.style.display = "block";
      //     signin.style.display = "none";
      //     break;
      //   case "signOut":
      //     signin.style.display = "block";
      //     break;
      //   case "signIn_failure":
      //     signin.style.display = "block";
      //     break;
      //   default: {
      //     signin.style.display = "block";
      //     signout.style.display = "none";
      //   }
      // }

      if (payload.event === "signIn") {
        console.log("a user has signed in!");
        signout.style.display = "block";
        signin.style.display = "none";
      }
      if (payload.event === "signOut") {
        console.log("a user has signed out!");
        signin.style.display = "block";
        signout.style.display = "none";
      }
    });
  }, []);

  return (
    <Navbar bg="light" expand="lg" fixed="">
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
        {/* <Nav.Item>
          <Nav.Link
            componentClass={Link}
            href="/login"
            to="/login"
            active={location.pathname === "/login"}
          >
            Login
          </Nav.Link>
        </Nav.Item> */}
        <Nav.Item>
          <Nav.Link
            componentClass={Link}
            href="profile"
            to="/profile"
            active={location.pathname === "/profile"}
          >
            Profile
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Navbar.Collapse className="justify-content-end">
        {/* <button onClick={() => Auth.federatedSignIn()}>Sign In</button> */}
        <div id="state_signin">
          <Button variant="success" onClick={signIn} className="ml-2">
            Sign In
          </Button>
        </div>
        <div id="state_signout" style={{ display: "none" }}>
          <Button variant="success" onClick={signOut} className="ml-2">
            Sign Out
          </Button>
        </div>
        {/* <Button variant="success" onClick={checkUser} className="ml-2">
            Check User
          </Button> */}
      </Navbar.Collapse>
    </Navbar>
  );
}
