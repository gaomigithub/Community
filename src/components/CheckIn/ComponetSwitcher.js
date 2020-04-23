import React from "react";
import MapContainer from "./MapContainer";
import CheckIn from "./CheckIn";

export class Switcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isMapState: true, name: "hi" };
  }

  handleLocationChange = (parkName) => {
    console.log(parkName);
    this.setState({
      name: parkName,
      isMapState: false,
      isCheckinState: true,
    });
  };

  render() {
    return (
      <div>
        {this.state.isMapState && (
          <MapContainer getLocation={this.handleLocationChange} />
        )}

        {this.state.isCheckinState && <CheckIn name={this.state.name} />}
      </div>
    );
  }
}
export default Switcher;
