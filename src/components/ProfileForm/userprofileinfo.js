import React, { Component } from "react";
import { Form, Formgroup, Label, Input, Button } from "react-bootstrap";
import { Auth } from "aws-amplify";
import { API, graphqlOperation } from "aws-amplify";
import { createUser } from "../../graphql/mutations"
import { getUser } from "../../graphql/queries"

class Userprofileinfo extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    currentUser: ""
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  async componentDidMount() {
    const user = await Auth.currentAuthenticatedUser();
    this.setState({currentUser: user})
  }

  createUser = () => {
    const currentUser = this.state.currentUser;
    const user = {
      input: {
        id: currentUser.attributes.sub,
        userName: this.props.username,
        firstName: this.props.firstName,
        lastName: this.props.lastName,
        userEmail: this.props.userEmail
      }
    }
    this.addUser(user)
    this.getUser(currentUser.attributes.sub)
  }

  async addUser(userInput) {
    await API.graphql(graphqlOperation(createUser, userInput))
        .then(data => console.log("Add User Success", data))
        .catch(err => console.log(err))
  }

  async getUser(userID) {
    await API.graphql(graphqlOperation(getUser, {id: userID}))
        .then(data => console.log("Get User Success", data))
        .catch(err => console.log(err))
  }

  render() {
    const { username, firstName, lastName, userEmail } = this.props;
    return (
      <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h2>Your Information</h2>
        UserName: <b>{username}</b>
        <br />
        First Name: <b>{firstName}</b>
        <br />
        Last Name: <b>{lastName}</b>
        <br />
        Email: <b>{userEmail}</b>
        <br />
        <div className="form-group-question">
          <label htmlFor="exampleFormControlSelect1">Do you have a dog? </label>
          {/* something */}
        </div>
        <div>
          <Button variant="success" onClick={this.back}>
            Back
          </Button>
          <Button variant="success" onClick={this.createUser}>Submit </Button>
        </div>
      </div>
    );
  }
}

export default Userprofileinfo;

// function Userprofile() {
//   const back = event => {
//     event.preventDefault();
//   };
//   return <div>hi</div>;
// }
