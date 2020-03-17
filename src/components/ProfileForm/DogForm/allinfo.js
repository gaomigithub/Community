import React, { Component } from "react";
class Allinfo extends Component {
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { dogs } = this.props;
    return (
      <div class="pricing-header px-3 py-3  mx-auto text-center">
        <h2>
          Your Dog's Profile
          {dogs != null ? (
            dogs.map((val, idx) => {
              console.log(val);
              return (
                <div>
                  Dog Name: <b>{val.dogName}</b>
                  <br />
                  Dog Age: <b>{val.dogAge}</b>
                  <br />
                  Dog Breed: <b>{val.dogBreed}</b>
                  <br />
                </div>
              );
            })
          ) : (
            <div>No Dog</div>
          )}
        </h2>
      </div>
    );
  }
}
export default Allinfo;
