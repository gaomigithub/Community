import React, { Component } from "react";
import UserInfo from "./userinfo.js";
import Userprofileinfo from "./userprofileinfo.js";
import { Auth } from "aws-amplify";
import { API, graphqlOperation } from "aws-amplify";
import { getUser, getDogs } from "../../graphql/queries";
import Doginfodetails from "./DogForm/doginfodetails";
import { Spinner } from "react-bootstrap";

class UserForm extends Component {
  state = {
    step: 1,
    username: "",
    firstName: "",
    lastName: "",
    userEmail: "",
    dogs: [],
  };

  async componentDidMount() {
    const user = await Auth.currentAuthenticatedUser();
    this.setState({ userEmail: user.attributes.email });
    this.setState({ username: user.username });
    console.log("UserForm current User", user);

    this.getUser(user.attributes.sub);
    this.getDogs(user.attributes.sub);
  }

  async getUser(userID) {
    await API.graphql(graphqlOperation(getUser, { id: userID }))
      .then((data) => {
        if (data.data.getUser != null) {
          this.setState({
            firstName: data.data.getUser.firstName,
            lastName: data.data.getUser.lastName
          })
        }
      })
      .catch(err => console.log(err));
  }

  async getDogs(userID) {
    await API.graphql(graphqlOperation(getDogs, { id: userID }))
      .then((data) => {
        if (data.data.getDogs != null) {
          this.setState({
            dogs: data.data.getDogs
          })
        }
      })
      .catch(err => console.log(err));
  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: 1
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

  handleDogChange = dogs => {
    this.setState({ dogs: dogs });
    console.log("change userform dogs state ", this.state.dogs);
  };

  showStep = () => {
    const {
      step,
      // user
      username,
      firstName,
      lastName,
      userEmail,
      dogs
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
              dogs={dogs}
            />
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
          />
        </div>
      );
    if (step === 3)
      return (
        <div>
          <Doginfodetails
            dogs={dogs}
            handleDogChange={this.handleDogChange}
            nextStep={this.nextStep}
          />
        </div>
      );
  };

  render() {
    const { step } = this.state;
    return <>{this.showStep()}</>;
  }
}

export default UserForm;
