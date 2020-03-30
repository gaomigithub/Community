import React, { useEffect, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import { Auth, Hub } from "aws-amplify";
import { Button } from "react-bootstrap";
import { signIn, signOut } from "../store/actions/authentication";
import { connect } from "react-redux";
import { getLoggedInState } from "../store/selectors";
import authenticationReducer from "../store/reducers/authentication";
// Function for check User
// function checkUser() {
//   Auth.currentAuthenticatedUser()
//     .then(user => console.log({ user }))
//     .catch(err => console.log(err));
// }

function NavigationBar() {
  const [signedIn, setSignedIn] = useState(false);
  let button;
  useEffect(() => {
    function handleStatusChange() {
      setSignedIn(true);
    }

    function handleSignInFailed() {
      setSignedIn(false);
    }

    Auth.currentAuthenticatedUser()
      .then(user => {
        console.log("current user ", user);
        handleStatusChange();
      })
      .catch(e => {
        console.log("error: ", e);
        handleSignInFailed();
      });

    Hub.listen("auth", data => {
      console.log("IM CALLED");
      console.log(data);
      switch (data.payload.event) {
        case "signIn":
          handleStatusChange();
          break;
        case "signOut":
          handleSignInFailed();
          break;
        default:
          break;
      }
    });
  }, []);

  console.log("signedIn", signedIn);
  let location = useLocation();
  let history = useHistory();

  function userSignIn() {
    history.push("/AppWithAuth");
  }
  function userSignOut() {
    history.push("/");
    Auth.signOut()
      .then(data => setSignedIn(false))
      .catch(err => console.log(err));
  }

  console.log("I am what status: ");
  if (signedIn) {
    console.log("Signed In");
    button = (
      <Button variant="success" onClick={userSignOut} className="ml-2">
        Sign Out
      </Button>
    );
  } else {
    console.log("Signed Out");
    button = (
      <Button variant="success" onClick={userSignIn} className="ml-2">
        Sign In
      </Button>
    );
  }

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
        <div className="user auth">{button}</div>
      </Navbar.Collapse>
    </Navbar>
  );
}

const mapStateToProps = state => {
  const signedIn = getLoggedInState(state);
  return { signedIn };
};

export default connect(mapStateToProps)(NavigationBar);
