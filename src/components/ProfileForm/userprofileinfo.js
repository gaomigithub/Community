import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Button, Row, Col } from "react-bootstrap";
import { Auth } from "aws-amplify";
import { API, graphqlOperation } from "aws-amplify";
import { createUser } from "../../graphql/mutations";
import { getUser } from "../../graphql/queries";

class Userprofileinfo extends Component {
  constructor(props) {
    super(props);
    this.createUser = this.createUser.bind(this);
  }

  state = {
    currentUser: ""
  };
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  async componentDidMount() {
    const user = await Auth.currentAuthenticatedUser();
    this.setState({ currentUser: user });
  }

  createUser = () => {
    this.props.history.push("./result-report");
    const currentUser = this.state.currentUser;
    const user = {
      input: {
        id: currentUser.attributes.sub,
        userName: this.props.username,
        firstName: this.props.firstName,
        lastName: this.props.lastName,
        userEmail: this.props.userEmail
      }
    };
    this.addUser(user);
  };

  async addUser(userInput) {
    await API.graphql(graphqlOperation(createUser, userInput))
      .then(data => console.log("Add User Success", data))
      .catch(err => console.log(err));
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
        {/* Own dogs: <b></b>
        <br /> */}
        <Row>
          <Col></Col>
          <Col>
            <div class="row mx-md-3 " style={{ margin: "50px" }}>
              <div class="col px-md-auto">
                <Button size="lg" variant="success" onClick={this.back} block>
                  Edit
                </Button>
              </div>
              <div class="col px-md-auto">
                <Button
                  size="lg"
                  variant="success"
                  onClick={this.createUser}
                  block
                >
                  Submit
                </Button>
              </div>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </div>
    );
  }
}

export default withRouter(Userprofileinfo);

// function Userprofile() {
//   const back = event => {
//     event.preventDefault();
//   };
//   return <div>hi</div>;
// }
