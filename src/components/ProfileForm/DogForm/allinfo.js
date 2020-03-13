import React, { Component } from "react";
class Allinfo extends Component {
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { dogName, dogAge, dogBreed, aboutMe } = this.props;
    return (
      <>
        <h2>Your Dog's Profile</h2>
        Dog Name: <b>{dogName}</b>
        <br />
        Dog Age: <b>{dogAge}</b>
        <br />
        Dog Breed: <b>{dogBreed}</b>
        <br />
        About Me: <b>{aboutMe}</b>
        <br />
      </>
    );
  }
}
export default Allinfo;
