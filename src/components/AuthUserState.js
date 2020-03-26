import React, { useEffect } from "react";
import { Auth, Hub } from "aws-amplify";
import { Button } from "react-bootstrap";
import { signIn, signOut } from '../store/actions/authentication'
import { connect } from "react-redux";
import { getUserState } from "../store/selectors"

function AuthUserState({ userState }) {
    useEffect(() => {
        // attempt to fetch the info of the user that was already logged in
        Auth.currentAuthenticatedUser()
          .then(user => {
            console.log("current user ", user);
            signIn(user.attributes.sub)
        })
          .catch(err => console.log(err));
          
        Hub.listen("auth", data => {
          console.log("A new auth event has happened: ", data);   
          switch (data.event) {
            case "signIn":
              Auth.currentAuthenticatedUser()
              .then(user => {
                console.log("current user ", user);
                signIn(user.attributes.sub)
            })
              .catch(err => console.log(err));
              break;
            case "signOut":
              signOut();
              break;
            default:
              break;
          }  
        });
    }, []);
    if (!userState.signedIn) {
        return (
            
            <Button variant="success" className="ml-2">
                Sign in
            </Button>
        );
    } else {
        return (
            <Button variant="success" className="ml-2">
                Sign in
            </Button>
        );
    }

}

const mapStateToProps = (state) => {
    const userState = getUserState()
    return {userState};
};

export default connect(mapStateToProps)(AuthUserState);