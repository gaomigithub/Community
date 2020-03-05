import React, { useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import { Auth, Hub } from "aws-amplify";
import { Button } from "react-bootstrap";
// import { signIn, signOut } from '../store/actions/authentication'
import { connect } from "react-redux";
import { AuthUserState } from "./AuthUserState"

// Function for check User
// function checkUser() {
//   Auth.currentAuthenticatedUser()
//     .then(user => console.log({ user }))
//     .catch(err => console.log(err));
// }

function NavigationBar() {
  let location = useLocation();
  let history = useHistory();
  function userSignIn() {
    history.push("/AppWithAuth");
  }
  function userSignOut() {
    history.push("/AppWithAuth");
    Auth.signOut()
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }

  // function loadUser() {
  //   Auth.currentAuthenticatedUser()
  //     .then(user => setUser(user))
  //     .catch(() => setUser(null));
  // }

  // in useEffect, we create the listener
  // useEffect(() => {
  //   // attempt to fetch the info of the user that was already logged in
  //   Auth.currentAuthenticatedUser()
  //     .then(user => {
  //       console.log("current user ", user);
  //       signIn(user.attributes.sub)
  //   })
  //     .catch(err => console.log(err));
      
  //   Hub.listen("auth", data => {
  //     console.log("A new auth event has happened: ", data);   
  //     switch (data.event) {
  //       case "signIn":
  //         Auth.currentAuthenticatedUser()
  //         .then(user => {
  //           console.log("current user ", user);
  //           signIn(user.attributes.sub)
  //       })
  //         .catch(err => console.log(err));
  //         break;
  //       case "signOut":
  //         signOut();
  //         break;
  //       default:
  //         break;
  //     }  
  //     // var signout = document.getElementById("state_signout");
  //     // var signin = document.getElementById("state_signin");
  //     // switch (payload.event) {
  //     //   case "signIn":
  //     //     signout.style.display = "block";
  //     //     signin.style.display = "none";
  //     //     break;
  //     //   case "signOut":
  //     //     signin.style.display = "block";
  //     //     signout.style.display = "none";
  //     //     break;
  //     //   // case "signUp":
  //     //   //   break;
  //     //   // case "signIn_failure":
  //     //   //   signin.style.display = "block";
  //     //   //   signout.style.display = "none";
  //     //   //   break;
  //     //   default:
  //     //     signin.style.display = "block";
  //     //     signout.style.display = "none";
  //     //     break;
  //     // }
  //   });
  // }, []);

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
        {/* <div id="state_signout" style={{ display: "none" }}> */}
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
        {/* </div> */}
      </Nav>
      <Navbar.Collapse className="justify-content-end">
        {/* <button onClick={() => Auth.federatedSignIn()}>Sign In</button> */}
        <div id="state_signin">
          <Button variant="success" onClick={userSignIn} className="ml-2">
            Sign In
          </Button>
        </div>
        <div
          id="state_signout"
          // default hide SigOut
          style={{ display: "block" }}
        >
          <Button variant="success" onClick={userSignOut} className="ml-2">
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
export default connect(
  null,
  {}
)(NavigationBar);