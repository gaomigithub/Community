import React, { Component } from "react";
import Doginfodetails from "./doginfodetails";
import { Button, Form, Card } from "react-bootstrap";
import UserForm from "../userform";
class DogForm extends Component {
  state = {
    step: 1,
    dogs: this.props.dogs
  };
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  handleChange = dogs => {
    this.setState({ dogs: dogs });
  };

  showStep = () => {
    const { step, dogs } = this.state;
    if (step === 1)
      return (
        <Doginfodetails
          handleChange={this.handleChange}
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          passDogsToParent={this.callbackFunction}
          dogs={dogs}
        />
      );

    if (step === 0)
      return (
        console.log("updated dogform dogs", this.state.dogs),
        (<UserForm dogs={dogs} />)
      );
  };

  // handleChange = e => {
  //   if (["dogName", "age", "breed"].includes(e.target.className)) {
  //     let dogs = [...this.props.dogs];
  //     dogs[e.target.dataset.id][e.target.className] = e.target.value;
  //     this.setState({ dogs }, () => console.log(this.state.dogs));
  //   } else {
  //     this.setState({ [e.target.name]: e.target.value });
  //   }
  // };

  render() {
    const { step, dogs } = this.state;
    return (
      <>
        <h2></h2>
        {this.showStep()}
      </>
    );
  }
}
export default DogForm;
