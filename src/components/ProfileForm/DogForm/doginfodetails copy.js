import React, { Component } from "react";
class Doginfodetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  state = { count: [] };
  addDog = () => {
    let newCount = this.state.count;
    console.log(this.state.count);
    newCount.push(1);
    this.setState({ count: newCount });
  };

  dogInputForm = (handleChange, dogName, dogAge, dogBreed, aboutMe) => {
    return (
      <div className="dogInfoContent">
        <label>
          <input
            type="text"
            name="dogName"
            placeholder="Dog Name"
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
    );
  };

  _renderdoginputForm = (handleChange, dogName, dogAge, dogBreed, aboutMe) => {
    return (
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

      //<this.dogInputForm />
      //   <div>
      //     {this.state.count.map(() => {
      //       return this.dogInputForm();
      //     })}
      //   </div>
    );
  };

  render() {
    const { handleChange, dogName, dogAge, dogBreed, aboutMe } = this.props;

    return (
      <>
        <h2>Puppy's Information:</h2>
        {this.state.count.map(() => {
          const length = Math.random();
          return (
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
          );
        })}
        {/* {this._renderdogInputForm(
          handleChange,
          dogName,
          dogAge,
          dogBreed,
          aboutMe
        )} */}
        <button className="Add" onClick={this.addDog.bind(this)}>
          Add >>
        </button>
        <button className="Next" onClick={this.continue}>
          Next >>
        </button>
      </>
    );
  }
}
export default Doginfodetails;
