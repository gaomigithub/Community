import React, { Component } from "react";
import UserInfo from "./userinfo.js";
import Userprofileinfo from "./userprofileinfo.js";
import { Auth } from "aws-amplify";
import { API, graphqlOperation } from "aws-amplify";
import { getUser } from "../../graphql/queries";
import Doginfodetails from "./DogForm/doginfodetails";
import Allinfo from "./DogForm/allinfo";
import DogForm from "./DogForm/dogForm";

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
    // user
    username: "",
    firstName: "",
    lastName: "",
    userEmail: ""
    // dog
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

  goDogs = () => {
    const { step } = this.state;
    this.setState({
      step: 3
    });
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };
  showStep = () => {
    const {
      step,
      // user
      username,
      firstName,
      lastName,
      userEmail
      // dog
    } = this.state;
    if (step === 1)
      return (
        <div>
          <Userprofileinfo
            username={username}
            firstName={firstName}
            lastName={lastName}
            userEmail={userEmail}
            prevStep={this.prevStep}
            goDogs={this.goDogs}
          />

          <Allinfo dogs={this.props.dogs} />
        </div>
      );
    if (step === 2)
      return (
        <div>
          <UserInfo
            handleChange={this.handleChange}
            nextStep={this.nextStep}
            username={username}
            firstName={firstName}
            lastName={lastName}
            userEmail={userEmail}
            dogs={this.state.dogs}
          />
        </div>
      );
    if (step === 3)
      return (
        <div>
          <DogForm />
        </div>
      );
  };

  render() {
    const { step } = this.state;
    return <>{this.showStep()}</>;
  }
}

export default UserForm;
