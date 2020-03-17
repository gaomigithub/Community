import React, { Component } from "react";
class Allinfo extends Component {
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { dogs } = this.props;
    return (
      <h2 class="mx-auto text-center">
        Your Dog's Profile
        {dogs != null ? (
          dogs.map((val, idx) => {
            console.log(val);
            return (
              <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
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
    );
  }
}
export default Allinfo;
