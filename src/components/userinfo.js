import React, { Component } from "react";

class Doginfodetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { handleChange, dogName, dogAge, dogBreed, aboutMe } = this.props;
    return (
      <>
        <h2>Puppy's Information:</h2>
        <div className="dogInfoContent">
          <label>
            <input
              type="text"
              name="dogName"
              placeholder="Dog Name"
              value={dogName}
              onChange={handleChange("dogName")}
            />
          </label>
          <label>
            <input
              type="numeric"
              name="dogAge"
              placeholder="Dog Age"
              value={dogAge}
              onChange={handleChange("dogAge")}
            ></input>
          </label>
          <label>
            <input
              type="text"
              name="dogBreed"
              placeholder="Breed"
              value={dogBreed}
              onChange={handleChange("dogBreed")}
            ></input>
          </label>
          <label>
            <textarea
              type="text"
              name="aboutMe"
              placeholder="Tell Us More About Your Pet"
              value={aboutMe}
              onChange={handleChange("aboutMe")}
              rows="3"
            ></textarea>
          </label>
        </div>
        <button className="Next" onClick={this.continue}>
          Next >>
        </button>
      </>
    );
  }
}

export default Doginfodetails;
