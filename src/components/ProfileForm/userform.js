import React, { Component } from "react";
import UserInfo from "./userinfo.js";
import Userprofileinfo from "./userprofileinfo.js";
import { Auth } from "aws-amplify";
import { API, graphqlOperation } from "aws-amplify";
import { getUser } from "../../graphql/queries";

class UserForm extends Component {
  async componentDidMount() {
    const user = await Auth.currentAuthenticatedUser();
    this.setState({ userEmail: user.attributes.email });
    this.setState({ username: user.username });
    console.log("UserForm current User", user);

    this.getUser(user.attributes.sub);
    console.log(this.state);
  }

  async getUser(userID) {
    await API.graphql(graphqlOperation(getUser, { id: userID }))
      .then(data =>
        data.data.getUser != null
          ? this.setState({
              firstName: data.data.getUser.firstName,
              lastName: data.data.getUser.lastName
            })
          : null
      )
      .catch(err => console.log(err));
  }

  state = {
    step: 1,
    username: "",
    firstName: "",
    lastName: "",
    userEmail: ""
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };
  showStep = () => {
    const { step, username, firstName, lastName, userEmail } = this.state;
    if (step === 2)
      return (
        <UserInfo
          handleChange={this.handleChange}
          nextStep={this.nextStep}
          username={username}
          firstName={firstName}
          lastName={lastName}
          userEmail={userEmail}
        />
      );
    if (step === 1)
      return (
        <Userprofileinfo
          username={username}
          firstName={firstName}
          lastName={lastName}
          userEmail={userEmail}
          prevStep={this.prevStep}
        />
      );
  };

  render() {
    const { step } = this.state;
    return <>{this.showStep()}</>;
  }
}

export default UserForm;
